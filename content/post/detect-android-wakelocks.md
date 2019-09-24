---
author: Antonio
title: "Detect Android Wakelocks"
date: 2019-09-23T19:45:09-04:00
draft: false
type: post
url: /detect-android-wakelocks/
description: "Detect Android wakelocks on your mobile device with a simple adb command that does not require root. The output of the command will tell you exactly which apps are causing the android wakelocks so you can take action."
categories:
- Tutorials
- android
tags:
- android
- tutorials
---

{{< image src="/images/linux/wake-1.png" alt="Android Wakelocks" width="150px" >}} {{< image src="/images/linux/wake-2.png" alt="Android Wakelocks" width="150px" >}}

If you're noticing that your android device is suddenly draining battery quicker than normal, it can be due to an android wakelock. Once you know the quick battery drain is not due to a faulty battery, you'll need to detect what's causing the wakelock. This is likely a misbehaving app.

<!--more-->

A misbehaving app can prevent your android device from going into deep sleep. Such behavior can be attributed to a poorly coded app or a malicious app doing nefarious things in the background. One example of a malicious app could be one that is crypto mining without your consent or knowledge in the background. It is wise to always get your apps from a reputable source, most preferably the Google Play Store.

A wakelock is not all bad. In fact, they are needed for some services that need to continue running in the background periodically. A good example of an app that needs to run a wakelock is your email app. An email app needs a wakelock to be able to sync your new emails as they are received. These types of android wakelocks are usually quick, only lasting a few minutes at a time.

## **Detect Android Wakelocks**

Now that we've covered a little background on android wakelocks, it's time to learn to detect them. Detecting an android wakelock is simple and straight forward. In this tutorial we'll cover a method that does not require root.

1. Go to your phone's "**settings > system > about phone**" and click on "**build number**" 7 times. This unlocks developer options. Now go back to the previous menu and click on "**Developer options**" and look for and enable "**USB debugging**".
2. Make sure to have <a href="https://developer.android.com/studio/releases/platform-tools.html#downloads" target="_blank">ADB</a> installed on your PC. Plug your phone to your PC with the USB cable and in a terminal on your PC run this command.
{{< highlight bash >}}adb devices{{< /highlight >}}
If your device is detected by ADB, you will see your device's serial number.
3. Now run this command to detect the wakelocks.
{{< highlight bash >}}adb shell dumpsys power | grep -i wake_lock{{< /highlight >}}

If there are no wakelocks at the time of running the above command, no wakelocks will be detected. Otherwise, you'll see wakelocks like in the screenshot below.

{{< image src="/images/linux/wake-0.png" alt="Android Wakelocks" width="150px" >}}

If you look at the screen shot above, the command shows 2 wakelocks. One wakelock is "**com.android.calendar**" which is my Calendar. The other is "**com.google.android.gms**" which is Google Mobile Services. Both of these wakelocks are safe and not an issue.

If you identify a wakelock to be from a misbehaving app you installed, you can simply uninstall it. Now if it's from a system app, you may not be able to uninstall it. You can check to see if it can be disabled. If not you can try a more aggressive solution in the following post I made by using the debloat option.

<a href="https://techstop.github.io/backup-and-debloat-android-no-root/">Backup and Debloat Android No Root</a>

## **Conclusion**

That will be all for this tutorial. You should now be able to easily detect an android wakelock and take control of your battery life back.
