---
author: Antonio
date: 2019-02-07 00:36:55+00:00
lastmod: 2022-02-17
draft: false
title: Admob Tutorial
type: post
url: /admob-tutorial/
description: "Follow this tutorial to learn how to add an admob Anchored Adaptive Banner to your Android app. By adding admob you can monetize your app to generate some income."
categories:
- Tutorials
- Android
tags:
- android studio
- app development
- java
- Tutorials
- Android
---

{{< image src="/images/admob-tutorial/admob-tutorial-0.png" alt="Admob Tutorial" width="100px" >}}
{{< image src="/images/admob-tutorial/admob-tutorial-1.png" alt="Admob Tutorial" width="100px" >}}

In this Android Admob tutorial we will go over how to add admob to your android app. With admob you can monetize your app and make some income for your efforts. There are a few types of admob ad units that you can add to your app. For this admob tutorial we will be adding the Anchored Adaptive Banner which can display high performance adaptive banner ads for all devices and screen sizes.

<!--more-->

The code in this tutorial will be in the full project on github linked at the bottom of this page. Feel free to fork or download the project from github.

<!--adsense-->

## Android Admob Example

Begin by creating a new project in Android Studio with an Empty Activity if you haven’t already. We can call the project “**Admob Tutorial**”.

You will first need to add the ads play services dependency to your **build.gradle** file…

{{< highlight groovy >}}
implementation 'com.google.android.gms:play-services-ads:20.5.0'
{{< /highlight >}}

Now add a FrameLayout for your AdView to your **activity_main.xml**.

**activity_main.xml**
{{< highlight xml >}}
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="Hello World!" />

    <FrameLayout
        android:id="@+id/ad_view"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:layout_alignParentBottom="true" />
</RelativeLayout>
{{< /highlight >}}

Now we add our ad serving code to the **MainActivity**. Make sure to read the comments I wrote within the code that explains what parts of the code do…

**MainActivity.java**
{{< highlight java >}}
package com.gt.admobtutorial;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.Display;
import android.widget.FrameLayout;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.MobileAds;

public class MainActivity extends AppCompatActivity {
    // The ad view for our banner ad unit.
    private AdView adView;
    // Test Ad Unit ID
    private static final String AD_UNIT_ID = "ca-app-pub-3940256099942544/6300978111";
    // The container for our ad unit.
    private FrameLayout adContainerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize our ad request.
        MobileAds.initialize(this, initializationStatus -> {});
        // Set your test devices. Check your logcat output for the hashed device ID to
        // get test ads on a physical device. e.g.
        // Uncomment the following line to get test ads(replace device id with your own device id)...
        // MobileAds.setRequestConfiguration(new RequestConfiguration.Builder().setTestDeviceIds(Collections.singletonList("102C2C747D96B6BBFC45B9E7D9238BE9")).build());
        adContainerView = findViewById(R.id.ad_view);
        adContainerView.post(this::loadBanner);
    }

    private void loadBanner() {
        // Create an ad request.
        adView = new AdView(this);
        adView.setAdUnitId(AD_UNIT_ID);
        adContainerView.removeAllViews();
        adContainerView.addView(adView);

        AdSize adSize = getAdSize();
        adView.setAdSize(adSize);

        AdRequest adRequest = new AdRequest.Builder().build();
        // Start loading the ad in the background.
        adView.loadAd(adRequest);
    }

    private AdSize getAdSize() {
        // Determine the screen width (less decorations) to use for the ad width.
        Display display = getWindowManager().getDefaultDisplay();
        DisplayMetrics outMetrics = new DisplayMetrics();
        display.getMetrics(outMetrics);

        float density = outMetrics.density;
        float adWidthPixels = adContainerView.getWidth();

        // If the ad hasn't been laid out, default to the full screen width.
        if (adWidthPixels == 0) {
            adWidthPixels = outMetrics.widthPixels;
        }

        int adWidth = (int) (adWidthPixels / density);
        return AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(this, adWidth);
    }

    // Pause ad view when leaving the activity.
    @Override
    public void onPause() {
        if (adView != null) {
            adView.pause();
        }
        super.onPause();
    }

    // Resume ad view when returning to the activity.
    @Override
    public void onResume() {
        super.onResume();
        if (adView != null) {
            adView.resume();
        }
    }

    // Destroy the ad view when the activity is destroyed.
    @Override
    public void onDestroy() {
        if (adView != null) {
            adView.destroy();
        }
        super.onDestroy();
    }

}
{{< /highlight >}}

The **Ad Unit ID** is a test sample provided by google for testing apps with admob. To get your real id you will need to sign into your admob account.

<!--adsense-->

Finally we add the admob **Application ID** meta-data to the **AndroidManifest.xml**. Without this step the app will not run…

**AndroidManifest.xml**
{{< highlight xml >}}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.gt.admobtutorial">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:theme="@style/AppTheme">
        <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="ca-app-pub-3940256099942544~3347511713" />
        <activity android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
{{< /highlight >}}

This will conclude the Android Admob tutorial. The full project is on github. You can download or fork it from the link below and import it to your favorite IDE, though Android Studio is recommended.

{{< cta-button "Android Admob" "https://github.com/GameTheory-/android-admob-tutorial" "_blank" >}}
