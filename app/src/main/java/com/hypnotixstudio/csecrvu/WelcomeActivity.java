package com.hypnotixstudio.csecrvu;

import android.content.Intent;
import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.SurfaceHolder;
import android.view.View;
import android.widget.Button;
import android.widget.VideoView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.io.IOException;

public class WelcomeActivity extends AppCompatActivity {

    private MediaPlayer mediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 1. Enable Edge-to-Edge
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_welcome);

        // 2. Handle System Bar Insets (Status bar/Navigation bar padding)
        View mainLayout = findViewById(R.id.main_layout);
        ViewCompat.setOnApplyWindowInsetsListener(mainLayout, (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());

            // Converting 32dp layout padding to pixels to add to the system bars
            float density = getResources().getDisplayMetrics().density;
            int padding32dp = (int) (32 * density);

            v.setPadding(
                    systemBars.left + padding32dp,
                    systemBars.top + padding32dp,
                    systemBars.right + padding32dp,
                    systemBars.bottom + padding32dp
            );
            return insets;
        });

        // 3. Setup Video Playback
        setupAutoPlayVideo();

        // 4. Button Listeners
        Button btnOnline = findViewById(R.id.btnOnline);
        Button btnOffline = findViewById(R.id.btnOffline);

        btnOnline.setOnClickListener(v -> {
            Intent i = new Intent(WelcomeActivity.this, MainActivity.class);
            i.putExtra("mode", "online");
            i.putExtra("url", "https://csecrvu.netlify.app");
            startActivity(i);
            finish();
        });

        btnOffline.setOnClickListener(v -> {
            Intent i = new Intent(WelcomeActivity.this, MainActivity.class);
            i.putExtra("mode", "offline");
            i.putExtra("assetPath", "www/index.html");
            startActivity(i);
            finish();
        });
    }

    private void setupAutoPlayVideo() {
        VideoView videoView = findViewById(R.id.videoViewHeader);

        videoView.getHolder().addCallback(new SurfaceHolder.Callback() {
            @Override
            public void surfaceCreated(SurfaceHolder holder) {
                try {
                    // Open the video from assets
                    AssetFileDescriptor afd = getAssets().openFd("intro_video.mp4");

                    mediaPlayer = new MediaPlayer();
                    // FIXED: Changed length() to getLength()
                    mediaPlayer.setDataSource(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength());
                    mediaPlayer.setDisplay(holder);
                    mediaPlayer.setLooping(true); // Loops the video

                    mediaPlayer.prepareAsync();
                    mediaPlayer.setOnPreparedListener(mp -> {
                        // Starts playback once the video is ready
                        mp.start();
                    });

                    // Close descriptor once the source is set
                    afd.close();

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {}

            @Override
            public void surfaceDestroyed(SurfaceHolder holder) {
                releaseMediaPlayer();
            }
        });
    }

    private void releaseMediaPlayer() {
        if (mediaPlayer != null) {
            mediaPlayer.release();
            mediaPlayer = null;
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        releaseMediaPlayer();
    }
}