---
author: Antonio
date: 2018-04-19 23:49:56+00:00
lastmod: 2022-02-24
draft: false
title: Backup and Debloat Android No Root
type: post
url: /backup-and-debloat-android-no-root/
description: "Backup and debloat Android without the need to root your device. If you don't want to, or there's no root for your device, then just use this tool to backup and debloat android without root."
categories:
- Android
- Linux
tags:
- Android
- Linux
---

{{< image src="/images/backupdebloat/Backup-and-Debloat-Android-No-Root.png" alt="Backup and Debloat Android No Root" width="200px" >}}

If you've ever had a rooted android device you know the added benefit. You gain total control over you're device. The freedom to remove carrier bloatware or make a number of modifications to your hearts content. Unfortunately if you're here reading this, it's likely because there is no root for your device or you simply don't wish to root it. We all know that for non rooted devices your options are very limited. So we will be taking a look at a tool I made called **Backup and Debloat Android No Root** to give you some control back over your device.

<!--more-->

Backup and Debloat Android No Root uses adb to uninstall bloatware and to make backups. Now this is nothing new. Android users have known about the adb non root method for a long time. What my tool does is simply facilitate everything in an easy to use script gui.

<!--adsense-->

Let's go over the different options in **Backup and Debloat Android No Root**...

1. This is where you backup user installed apps as allowed by adb limitations (more on limitations later).
2. This is a full backup of user and system apps as allowed by adb limitations.
3. Here you can individually choose which apps to backup.
4. Backup the internal storage. Also known as internal SD.
5. Restore any of your backups made with this tool.
6. Remove system or user apps (my favorite option).
7. If your android device is not recognized when plugged to your computer through usb then run this option to install android udev rules.

The rest of the options are self explanatory.

## **Limitations**

Adb has its known limitations...

Adb can only backup apps where the developer of the app allows the app to be backed up in the **AndroidManifest.xml** with a bit of code that looks like this **android:allowBackup="true"**. If this option is set to false, full backups of those apps will be ignored (options 1 and 2). In individual app backups you will get an empty backup for those apps. For all other apps you'll have good reliable backups.

When apps are uninstalled they will not consume any resources or be visible to the user (that's good!). However, apps are only uninstalled for the user and not root. This means the apps are uninstalled but remain on the device like if they are frozen (not a problem at all).

## **Warnings**

Do not uninstall system critical apps that may cause a boot loop. If you do, perform a factory reset to end the boot loop.

If you uninstall apps that you later decide you want back, you can do a factory reset and the apps will reinstall.

<!--adsense-->

## **Backup & Debloat**

For Android 4.0 and up

Tested on ubuntu & Manjaro

Make sure the "**bda**" file has execute permissions.

1. Enable usb debugging on your device in developer options and then plug it to your computer.
2. Execute the file as follows in a terminal:
  {{< highlight bash >}}./bda{{< /highlight >}}
3. optional - Use the "Add Desktop Shortcut" option for quick access

{{< cta-button "Backup Debloat Android" "https://github.com/GameTheory-/Backup-and-Debloat-Android-No-Root/releases" "_blank" >}}
