package com.hypnotixstudio.csecrvu;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
// Add this import
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

public class MainActivity extends AppCompatActivity {

    WebView CSEWEB;
    SwipeRefreshLayout swipeRefreshLayout; // Declare the swipe layout

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

        // 2. Configure WebView
        CSEWEB.getSettings().setJavaScriptEnabled(true);
        CSEWEB.getSettings().setAllowFileAccess(true);
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN) {
            CSEWEB.getSettings().setAllowUniversalAccessFromFileURLs(true);
        }

        // 3. Configure Swipe Refresh
        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                CSEWEB.reload(); // Reload the website when pulled
            }
        });

        // 4. Handle Page Loading (Stop the spinner when done)
        CSEWEB.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                swipeRefreshLayout.setRefreshing(false); // Stop the animation
            }
        });

        // 5. Load based on intent (online/offline)
        String mode = getIntent().getStringExtra("mode");
        if (mode == null) mode = "online"; // default

        if ("offline".equalsIgnoreCase(mode)) {
            String assetPath = getIntent().getStringExtra("assetPath");
            if (assetPath == null) assetPath = "www/index.html";
            CSEWEB.loadUrl("file:///android_asset/" + assetPath);
        } else {
            String url = getIntent().getStringExtra("url");
            if (url == null) url = "https://zakialsaad.github.io/CSE2NDSEMSECA";
            CSEWEB.loadUrl(url);
        }
    }
}