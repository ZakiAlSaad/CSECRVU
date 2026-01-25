package com.hypnotixstudio.csecrvu;

import android.content.Intent;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

public class MainActivity extends AppCompatActivity {

    WebView CSEWEB;
    SwipeRefreshLayout swipeRefreshLayout;
    Button btnBack;

    // Define your trusted domain
    private static final String TRUSTED_URL = "https://zakialsaad.github.io/CSE2NDSEMSECA";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        // 1. Initialize Views
        CSEWEB = findViewById(R.id.CSEWEB);
        swipeRefreshLayout = findViewById(R.id.swipeContainer);
        btnBack = findViewById(R.id.btnBack);

        btnBack.setOnClickListener(v -> {
            Intent i = new Intent(MainActivity.this, WelcomeActivity.class);
            startActivity(i);
            finish();
        });

        // 2. Configure WebView
        CSEWEB.getSettings().setJavaScriptEnabled(true);
        CSEWEB.getSettings().setAllowFileAccess(true);
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN) {
            CSEWEB.getSettings().setAllowUniversalAccessFromFileURLs(true);
        }

        // JS bridge for offline page to navigate back
        CSEWEB.addJavascriptInterface(new Object() {
            @JavascriptInterface
            public void backToWelcome() {
                runOnUiThread(() -> {
                    Intent i = new Intent(MainActivity.this, WelcomeActivity.class);
                    startActivity(i);
                    finish();
                });
            }
        }, "AndroidBridge");

        // 3. Configure Swipe Refresh
        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                CSEWEB.reload();
            }
        });

        // 4. Handle Page Loading
        CSEWEB.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                swipeRefreshLayout.setRefreshing(false);
            }
        });

        // 5. Load based on intent (online/offline) - SECURED
        String mode = getIntent().getStringExtra("mode");
        if (mode == null) mode = "online";

        if ("offline".equalsIgnoreCase(mode)) {
            String assetPath = getIntent().getStringExtra("assetPath");
            // Security check: Prevent directory traversal (e.g., "../../etc/passwd")
            if (assetPath == null || assetPath.contains("..")) {
                assetPath = "www/index.html";
            }
            CSEWEB.loadUrl("file:///android_asset/" + assetPath);
        } else {
            String url = getIntent().getStringExtra("url");

            // Security check: Only allow your trusted GitHub URL
            if (url != null && url.startsWith("https://zakialsaad.github.io")) {
                CSEWEB.loadUrl(url);
            } else {
                // Fallback to the default safe URL if the intent contains something suspicious
                CSEWEB.loadUrl(TRUSTED_URL);
            }
        }
    }
}