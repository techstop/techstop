---
author: Antonio
date: 2019-01-19 00:50:48+00:00
draft: false
title: Android BroadcastReceiver
type: post
url: /android-broadcastreceiver/
categories:
- Tutorials
- Android
tags:
- android studio
- app development
- java
---

{{< image src="/images/broadcastreceiver/android-broadcastreceiver.png" alt="Android BroadcastReceiver" width="100px" >}}

Today we will be using an android BroadcastReceiver to run code on boot up. There can be many reasons to run code on boot up. One good use case would be to enable settings that a user has selected within your app to be set on every boot up.

<!--more-->

We will place the code we need to run on boot up in a Service class that we will be initiating from our BroadcastReceiver class.

The code in this tutorial will be in the full project which I have uploaded to github and linked near the bottom of this page. Feel free to fork or download the project from github. So lets get started.

## Android BroadcastReceiver Example Tutorial

Lets begin by creating a new project in Android Studio with an Empty Activity if you haven't already. We can call the project BroadcastReceiver.

Create a new java class called BootUpService. The BootUpService class will extend Service. This Service will be responsible for running what we need on boot up. Here's what it should look like…

{{< highlight java >}}
package com.gt.broadcastreceiver;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.widget.Toast;

public class BootUpService extends Service {

  @Override
  public void onCreate() {
    super.onCreate();
  }

  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }

  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    // Any code you need to run on boot up can be placed here.
    // This is just a sample Toast message to show our BroadcastReceiver works.
    Toast.makeText(getApplicationContext(), "Our BroadcastReceiver works! Fantastic!", Toast.LENGTH_LONG).show();

    // Stops the Service after it's done.
    stopSelf();
    // Do not restart the Service till the next reboot.
    return START_NOT_STICKY;
  }

}
{{< /highlight >}}

Make sure to declare the BootUpService class in your AndroidManifest.xml like this…

{{< highlight xml >}}<service android:name=".BootUpService" />{{< /highlight >}}

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
      Intent serviceIntent = new Intent(context, BootUpService.class);
      context.startService(serviceIntent);
    }
  }

}
{{< /highlight >}}

We now need to add permission and declare the BroadcastReceiver in the AndroidManifest.xml as follows…

{{< highlight xml >}}
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

<receiver android:name=".BootUpReceiver" android:enabled="true" android:exported="false">
  <intent-filter>
    <action android:name="android.intent.action.BOOT_COMPLETED" />
  </intent-filter>
</receiver>
{{< /highlight >}}

There you have it. That is all you need to setup a BroadcastReceiver with a Service to run your code on every boot up. Do keep in mind that the user needs to open your app at least once after they have installed it for a BroadcastReceiver to work (This is a security feature in android).

The full project is on github. You can download or fork it from the link below and import it to your favorite IDE, though Android Studio is recommended.

{{< cta-button "Android BroadcastReceiver" "https://github.com/GameTheory-/android-broadcastreceiver" "_blank" >}}
