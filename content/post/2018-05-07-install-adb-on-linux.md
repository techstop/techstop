---
author: Antonio
date: 2018-05-07 21:16:16+00:00
lastmod: 2022-03-26
draft: false
title: Install ADB On Linux
type: post
url: /install-adb-on-linux/
description: "In this tutorial we will be installing ADB (Android Debug Bridge) on your linux computer. ADB can be useful for many things like installing and uninstalling apps, disabling and enabling apps , logcat, and many other things."
categories:
- Linux
- Android
tags:
- Linux
- Android
- Tutorials
---

{{< image src="/images/linux/adb-on-linux.png" alt="ADB on Linux" width="500px" >}}

In this tutorial we will be installing ADB (Android Debug Bridge) on your linux computer and making it accessible from any directory.

ADB provides a terminal interface on your linux computer to interact with your android device file system. This can be useful for many things like installing and uninstalling apps, disabling and enabling apps , logcat, and many other things.

<!--more-->

<!--adsense-->

## Install ADB

Begin by downloading the android [SDK Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip) which contains adb and fastboot. It's a very small and quick download.

1. Open your terminal by pressing (ctrl+alt+T) on your computer keyboard or by clicking its launcher icon.
2. Create a directory named (adb) in your linux Home directory. You can run this command in terminal to create the directory:
{{< highlight bash >}}
mkdir $HOME/adb
{{< /highlight >}}
3. Extract the (platform-tools-latest-linux.zip) in the new adb directory we created above and you'll get a new directory named (platform-tools).
4. Add the platform-tools directory to your linux environment path to make adb and fastboot accessible from any directory. To do this, go to your Home directory and show hidden files and open your (.bashrc) file then add the following 2 lines to the bottom of the file and save it.
{{< highlight text >}}
# Android platform-tools
export PATH=${PATH}:~/adb/platform-tools
{{< /highlight >}}
5. Now close your terminal and then open it again. Now run the following command to test adb:
{{< highlight bash >}}
adb version
{{< /highlight >}}

If all went well you should get an output in your terminal with the adb version number. You have now installed adb on your linux computer.

<!--adsense-->

## Test ADB with Android

Now that you have adb installed on your linux computer you should test it with your android to make sure adb recognizes your android device.

1. Make sure you have (USB debugging) enabled on your android device in the Settings (Developer options).
2. Plug your android device to your computer with the usb cable.
3. Now open a terminal on your computer and run the following command:
{{< highlight bash >}}
adb devices
{{< /highlight >}}
4. On your android device you will get a prompt asking you to allow USB debugging. Go ahead and allow it. After allowing it, you may need to run the above command again.

You will now see a terminal output with your android device serial number which will look similar to the output below.
{{< highlight text >}}
List of devices attached
c4fec245        device
{{< /highlight >}}

## Conclusion

You should now have adb installed on your linux computer and ready to interact with your android devices. For more adb commands and options you can run (adb help) in your terminal.
