---
author: Antonio
date: 2019-02-07 00:36:55+00:00
draft: false
title: Admob Tutorial
type: post
url: /admob-tutorial/
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

In this Android Admob tutorial we will go over how to ad admob to your android app. With admob you can monetize your app and make some income for your efforts. There are a few types of admob ad units that you can ad to your app. For this admob tutorial we will be adding the smart banner which can display banner ads of different sizes eliminating the need to set a fixed size.

<!--more-->

The code in this tutorial will be in the full project on github linked at the bottom of this page. Feel free to fork or download the project from github.

## Android Admob Example

Begin by creating a new project in Android Studio with an Empty Activity if you haven’t already. We can call the project “**Admob Tutorial**”.

You will first need to add the ads play services dependency to your **build.gradle** file…

{{< highlight groovy >}}
implementation 'com.google.android.gms:play-services-ads:17.1.3'
{{< /highlight >}}

Now add a LinearLayout for your AdView to your **activity_main.xml**.

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

  <LinearLayout
    android:id="@+id/ad_view"
    android:orientation="vertical"
    android:layout_centerHorizontal="true"
    android:layout_alignParentBottom="true"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
</RelativeLayout>
{{< /highlight >}}

Now we add our ad serving code to the **MainActivity**. Make sure to read the comments I wrote within the code that explains what parts of the code do…

**MainActivity.java**
{{< highlight java >}}
package com.gt.admobtutorial;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.MobileAds;

public class MainActivity extends AppCompatActivity {
  private AdView adView;
  // Test Ad Unit ID
  private static final String adUnitID = "ca-app-pub-3940256099942544/6300978111";
  // Test App ID
  private static final String appID = "ca-app-pub-3940256099942544~3347511713";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    // Start our ad view method below.
    startAdView();
  }

  // This method will load our ad view.
  private void startAdView() {
    MobileAds.initialize(this, appID);
    adView = new AdView(this);
    adView.setAdSize(AdSize.SMART_BANNER);
    adView.setAdUnitId(adUnitID);
    LinearLayout layout = findViewById(R.id.ad_view);
    AdListener listener = new AdListener() {
      @Override
      public void onAdLoaded() {
        adView.setVisibility(View.VISIBLE);
        super.onAdLoaded();
      }
    };
    adView.setAdListener(listener);
    adView.setVisibility(View.GONE);
    layout.addView(adView);
    AdRequest adRequest = new AdRequest.Builder().build();
    adView.loadAd(adRequest);
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

The **Ad Unit ID** and the **App ID** are test samples provided by google for testing apps with admob. To get your real IDs you will need to sign into your admob account.

Finally we add the admob App ID **meta-data** to the **AndroidManifest.xml**. Without this step the app will not run…

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
    android:supportsRtl="true"
    android:theme="@style/AppTheme">
    <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID"
      android:value="ca-app-pub-3940256099942544~3347511713" />
    <activity android:name=".MainActivity">
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
