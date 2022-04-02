---
author: Antonio
date: 2018-04-19 23:49:56+00:00
lastmod: 2022-03-08
draft: false
title: Debloat Android No Root
type: post
url: /debloat-android-no-root/
description: "Debloat Android without the need to root your device. If you don't want to, or there's no root for your device, then just use this tool to debloat android without root."
categories:
- Android
- Linux
tags:
- Android
- Linux
---

{{< image src="/images/backupdebloat/Debloat-Android-No-Root.png" alt="Debloat Android No Root" width="450px" >}}

If you've ever had a rooted android device you know the added benefit. You gain total control over you're device. The freedom to remove carrier bloatware or make a number of modifications to your hearts content. Unfortunately if you're here reading this, it's likely because there is no root for your device or you simply don't wish to root it. We all know that for non rooted devices your options are very limited. So we will be taking a look at a tool I made called **Debloat Android No Root** to give you some control back over your device.

<!--more-->

Debloat Android No Root uses adb to uninstall bloatware or disable the bloatware. Now this is nothing new. Android users have known about the adb non root method for a long time. What my tool does is simply facilitate everything in an easy to use script gui.

Let's go over the different options in **Debloat Android No Root**...

1. This allows you to disable apps without uninstalling them. Once disabled the apps will not run or be visible in your app drawer. This is like freezing an app.
2. Here you will be able to re-enable apps that you disabled with option 1 above.
3. This will uninstall the apps. You must use caution to not uninstall a system critical app.
4. Here you can re-install the apps that you uninstalled with option 3 above.
5. This option gives you a full list of device properties and information.
6. If your android device is not recognized when plugged to your computer through usb then run this option to install android udev rules.

The rest of the options are self explanatory.

<!--adsense-->

## **Note**

When apps are uninstalled they will not consume any system resources or be visible to the user. However, apps are only uninstalled for the user and not for root. This means the apps are uninstalled but remain on the device which is not a bad thing. Caution is still necessary to not uninstall a system critical app that the device needs to run properly.

## **Warnings**

If you uninstall system critical apps you may cause a boot loop. If you do, you can re-install them with option 4 if you still have access to adb or perform a factory reset which will end the boot loop.

## **Usage**

For Android 4.0 and up

Tested on ubuntu & manjaro

Make sure the "**bda**" file has execute permissions.

1. Enable usb debugging on your device in developer options and then plug it to your computer.
2. Execute the file as follows in a terminal:
  {{< highlight bash >}}./bda{{< /highlight >}}
3. optional - Use the "Add Desktop Shortcut" option for quick access

{{< cta-button "Debloat Android No Root" "https://github.com/GameTheory-/Debloat-Android-No-Root/releases" "_blank" >}}
