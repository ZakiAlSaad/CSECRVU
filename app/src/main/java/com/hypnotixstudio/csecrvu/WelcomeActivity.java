package com.hypnotixstudio.csecrvu;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class WelcomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        Button btnOnline = findViewById(R.id.btnOnline);
        Button btnOffline = findViewById(R.id.btnOffline);

        btnOnline.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(WelcomeActivity.this, MainActivity.class);
                i.putExtra("mode", "online");
                i.putExtra("url", "https://zakialsaad.github.io/CSE2NDSEMSECA");
                startActivity(i);
                finish();
            }
        });

        btnOffline.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(WelcomeActivity.this, MainActivity.class);
                i.putExtra("mode", "offline");
                i.putExtra("assetPath", "www/index.html");
                startActivity(i);
                finish();
            }
        });
    }
}