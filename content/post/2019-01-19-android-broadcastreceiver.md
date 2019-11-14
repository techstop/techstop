---
author: Antonio
date: 2019-01-19 00:50:48+00:00
lastmod: 2019-09-11
draft: false
title: Android BroadcastReceiver
type: post
url: /android-broadcastreceiver/
description: "The Android BroadcastReceiver class is very important and should get familiar with it. In this tutorial we will cover how to use the BroadcastReceiver with a JobIntentService to run some code upon boot up."
googleAdsenseVerify: false
categories:
- Tutorials
- Android
tags:
- android studio
- app development
- java
- Tutorials
- android
---

{{< image src="/images/broadcastreceiver/android-broadcastreceiver.png" alt="Android BroadcastReceiver" width="100px" >}}

Today we will be using an android BroadcastReceiver to run code on boot up. There can be many reasons to run code on boot up. One good use case would be to enable settings that a user has selected within your app to be set on every boot up.

<!--more-->

We will place the code we need to run on boot up in a Service class that we will be initiating from our BroadcastReceiver class.

The code in this tutorial will be in the full project which I have uploaded to github and linked near the bottom of this page. Feel free to fork or download the project from github. So lets get started.

## Android BroadcastReceiver Example Tutorial

Lets begin by creating a new project in Android Studio with an Empty Activity if you haven't already. We can call the project BroadcastReceiver.

Create a new java class called BootUpService. The BootUpService class will extend JobIntentService. This Service will be responsible for running what we need on boot up. Here's what it should look like…

{{< highlight java >}}
package com.gt.broadcastreceiver;

import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.core.app.JobIntentService;

public class BootUpService extends JobIntentService {

  // You can assign any number to your job id
  final static int job_id = 95;

  public static void enqueueWork(Context context, Intent intent) {
    enqueueWork(context, BootUpService.class, job_id, intent);
  }

  @Override
  protected void onHandleWork(@NonNull Intent intent) {
    // Any code you need to run on boot up can be placed here.
    // This is just a sample Toast message to show our BroadcastReceiver works.
    // We'll be using a Handler to run our Toast since it needs to run on the UI thread. Otherwise you don't need it.
    Handler handler = new Handler(Looper.getMainLooper());
    handler.post(new Runnable() {
      @Override
      public void run() {
          Toast.makeText(getApplicationContext(), "Our BroadcastReceiver works! Fantastic!", Toast.LENGTH_LONG).show();
      }
    });
  }

}
{{< /highlight >}}

Make sure to declare the BootUpService class in your AndroidManifest.xml like this…

{{< highlight xml >}}
<service android:name=".BootUpService"
  android:permission="android.permission.BIND_JOB_SERVICE"/>
{{< /highlight >}}

Now lets create another java class called BootUpReceiver which will extend BroadcastReceiver. The BroadcastReceiver is going to check that boot up has completed and then run our BootUpService class. Here's what it looks like…

{{< highlight java >}}
package com.gt.broadcastreceiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class BootUpReceiver extends BroadcastReceiver {

  @Override
  public void onReceive(Context context, Intent intent) {
    // Start our BootUpService class once boot up has completed
    if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
      BootUpService.enqueueWork(context, new Intent());
    }
  }

}
{{< /highlight >}}

We now need to add permissions and declare the BroadcastReceiver in the AndroidManifest.xml as follows…

{{< highlight xml >}}
<!--For pre-android O to run JobIntentService, WAKE_LOCK is needed-->
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

<receiver android:name=".BootUpReceiver" android:enabled="true" android:exported="false">
  <intent-filter>
    <action android:name="android.intent.action.BOOT_COMPLETED" />
  </intent-filter>
</receiver>
{{< /highlight >}}

There you have it. That is all you need to setup a BroadcastReceiver with a JobIntentService to run your code on every boot up. Do keep in mind that the user needs to open your app at least once after they have installed it for a BroadcastReceiver to work (This is a security feature in android).

The full project is on github. You can download or fork it from the link below and import it to your favorite IDE, though Android Studio is recommended.

{{< cta-button "Android BroadcastReceiver" "https://github.com/GameTheory-/android-broadcastreceiver" "_blank" >}}
