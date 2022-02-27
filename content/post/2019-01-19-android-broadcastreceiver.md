---
author: Antonio
date: 2019-01-19 00:50:48+00:00
lastmod: 2022-02-18
draft: false
title: Android BroadcastReceiver
type: post
url: /android-broadcastreceiver/
description: "The Android BroadcastReceiver and WorkManager classes are very important and you should get familiar with them. In this tutorial we will cover how to use the BroadcastReceiver with a WorkManager to run some code on bootup."
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

Today we will be using an android **BroadcastReceiver** and **WorkManager** to run code on bootup in Android. There can be many reasons to run code on bootup. One good use case would be to set settings that a user has selected within your app on every bootup.

<!--more-->

We will place the code we need to run on bootup in a Worker class provided by the WorkManager that we will be initiating from our BroadcastReceiver. Any task or code in our Worker class will run in a background thread. This is good practice to avoid holding up the UI thread. If you do need to run for example, a Toast message on the UI thread, then you can wrap it in a Handler, but that's outside the scope of this tutorial.

<!--adsense-->

The code in this tutorial will be in the full project which I have uploaded to github and linked near the bottom of this page. Feel free to fork or download the project from github. Lets get started.

## **Android BroadcastReceiver & WorkManager Tutorial**

Lets begin by creating a new project in Android Studio with an Empty Activity if you haven't already. We can call the project BroadcastReceiver.

To start things off we need to add a couple of dependencies in our app **build.gradle** file...

This dependency is needed to use the WorkManager.

{{< highlight groovy >}}
implementation 'androidx.work:work-runtime:2.7.1'
{{< /highlight >}}

This dependency is needed for the Notification message in this tutorial.

{{< highlight groovy >}}
implementation 'androidx.core:core:1.7.0'
{{< /highlight >}}

Create a new java class called BootUpWork. The BootUpWork class will extend Worker. This class will be responsible for running our task or code in a background thread on bootup. Here's what it should look like…

{{< highlight java >}}
package com.gt.broadcastreceiver;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;

import androidx.annotation.NonNull;
import androidx.core.app.NotificationCompat;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

public class BootUpWork extends Worker {

    public BootUpWork(@NonNull Context context, @NonNull WorkerParameters workerParams) {
        super(context, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {
        // Any code/task you need to run on bootup can be placed here and will run on a background thread.
        // This is just a sample notification message to show our BroadcastReceiver and
        // WorkManager are working properly.
        String channelID = "channel_0";
        NotificationManager notificationManager = (NotificationManager)getApplicationContext().getSystemService(Context.NOTIFICATION_SERVICE);
        NotificationCompat.Builder builder = new NotificationCompat.Builder(getApplicationContext(), channelID);
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel channel = new NotificationChannel(channelID,"BroadcastReceiver", NotificationManager.IMPORTANCE_DEFAULT);
            channel.enableLights(true);
            channel.setShowBadge(true);
            channel.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            notificationManager.createNotificationChannel(channel);
        }
        builder.setSmallIcon(android.R.drawable.stat_notify_more)
                .setContentTitle("Run Tasks on Bootup")
                .setContentText("BroadcastReceiver & WorkManager")
                .setStyle(new NotificationCompat.BigTextStyle().bigText(
                        "Our BroadcastReceiver and WorkManager are working properly " +
                                "to run code/tasks on bootup."
                ))
                .setDefaults(NotificationCompat.DEFAULT_SOUND | NotificationCompat.DEFAULT_LIGHTS)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setAutoCancel(true);
        notificationManager.notify(0, builder.build());

        return Result.success();
    }
}
{{< /highlight >}}

Now lets create another java class called BootUpReceiver which will extend BroadcastReceiver. The BroadcastReceiver is going to check that bootup has completed and then run our BootUpWork class. Here's what it looks like…

{{< highlight java >}}
package com.gt.broadcastreceiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import androidx.work.OneTimeWorkRequest;
import androidx.work.WorkManager;
import androidx.work.WorkRequest;

public class BootUpReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        // Runs when bootup has completed.
        if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            // Our WorkManager will now run our task in a background thread.
            WorkRequest uploadWorkRequest = new OneTimeWorkRequest.Builder(BootUpWork.class).build();
            WorkManager.getInstance(context).enqueue(uploadWorkRequest);
        }
    }

}
{{< /highlight >}}

We now need to add permissions and declare the BroadcastReceiver in the AndroidManifest.xml as follows…

{{< highlight xml >}}
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

<receiver android:name=".BootUpReceiver" android:enabled="true" android:exported="false">
  <intent-filter>
    <action android:name="android.intent.action.BOOT_COMPLETED" />
  </intent-filter>
</receiver>
{{< /highlight >}}

There you have it. That is all you need to setup a BroadcastReceiver with a WorkManager to run your code on every bootup. Do keep in mind that the user needs to open your app at least once after they have installed it for a BroadcastReceiver to work (This is a security feature in android).

The full project is on github. You can download or fork it from the link below and import it to your favorite IDE, though Android Studio is recommended.

{{< cta-button "Android BroadcastReceiver" "https://github.com/GameTheory-/android-broadcastreceiver" "_blank" >}}
