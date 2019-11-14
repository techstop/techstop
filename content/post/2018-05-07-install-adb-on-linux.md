---
author: Antonio
date: 2018-05-07 21:16:16+00:00
draft: false
title: Install ADB On Linux
type: post
url: /install-adb-on-linux/
description: "Follow this guide to install ADB on Linux. ADB and fastboot are two important tools to interface with your android devices. This is especially useful to a developer."
googleAdsenseVerify: false
categories:
- Linux
- Tutorials
- Android
tags:
- Linux
- Android
- Tutorials
---

{{< image src="/images/adb-linux/install_adb_on_linux.png" alt="Install ADB On Linux" width="150px" >}}

If you’re looking to install adb on Linux, but don’t want to install Android Studio then this guide is for you. Android Studio is a development environment for creating android apps, but it’s a large download and installation if all you need is adb and fastboot. Below is a guide to install just adb and fastboot which will be a very small download and quick installation.

<!--more-->

This guide is intended for xubuntu and most distributions based on ubuntu, but should also work on most other linux distributions.

## Instructions

1. Download [SDK Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
2. Place the downloaded zip file in your **home** folder and then extract it and you should get a folder named **platform-tools** (do not rename it).
3. In terminal run this command. Change "**gedit**" for your default text editor.
  {{< highlight bash >}}gedit admin://$HOME/.bashrc{{< /highlight >}}
4. When the file opens, go to the very bottom and copy/paste the following 2 lines...
  {{< highlight bash >}}# Android tools
export PATH=${PATH}:~/platform-tools{{< /highlight >}}
5. Now logout then log back in or alternatively reboot your computer.
6. Set your phone to usb debugging in developer options then plug it to your computer.
7. Open a terminal on your computer and enter....
  {{< highlight bash >}}adb devices{{< /highlight >}}

If all went well, you should see your phone’s serial number and you’ll be ready to use adb.
