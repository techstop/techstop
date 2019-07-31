---
author: Antonio
date: 2018-06-08 01:35:25+00:00
draft: false
title: APK Utility
type: post
url: /apk-utility/
categories:
- Android
- Linux
tags:
- Android
- Linux
- Decompile APK
- apktool
---

{{< image src="/images/apk-utility/apk-utility.png" alt="APK Utility" width="150px" >}}

If you've been looking for an easy to use tool for decompiling and compiling apk and jar files then look no further. APK Utility is as easy to use as it gets. The utility also has the ability to tag frameworks. This feature is very useful when you need to install frameworks for multiple different devices without having to remove one for the other. If you're familiar with <a href="https://ibotpeaches.github.io/Apktool/documentation/" target="_blank">apktool</a> which this tool uses then you'll know what I'm referring to.

<!--more-->

## Getting started

To get started with APK Utility make sure you have java installed. Place all your apk and jar files in the "input" folder. Then you'll want to install the framework for the device you're working on. You can do a normal framework install or a tagged framework install. Personally I always use tagged framework installs. This helps me work on multiple devices in an easy and organized way.

## Examples of tagging frameworks

Lets say you want to have 3 frameworks from 3 different devices installed at once. Assuming those devices are an HTC, LG, and Samsung then you can tag the frameworks with the device models as such: M8, G6, S9. Now when you decompile an apk or jar file from any of those 3 devices you simply choose a tag from the list that matches the device.

## Options Available

1. Usual decompile of apk or jar.
2. Decompile without dex(smali). Used when only editing images and xml files.
3. Decompile using device specific framework tag.
4. Same as option 3, but without dex(smali).
5. Usual compile of apk or jar files.
6. Compile apk or jar file with original signature.
7. Usual framework install used when only working on 1 device at any given time.
8. Tagged framework install used for working on multiple different devices.
9. A usual zipalign.
10. Sign or change original signature to a generic signature. Good for preventing your modded app from updating from the playstore.
11. Manage tags is for removing any tags you may not need anymore.
12. Check for APK Utility updates
13. Create a desktop shortcut in your app menu which you can place on your desktop or in any folder.

## Usage

Tested on xubuntu and ubuntu. For 64 bit systems only.

1. Make sure the "apku" file has execute permissions.
2. Make sure to have java installed.
3. Place all your apk and jar files in the input folder. If zipaligning only, place them in the zipalign folder.
4. Execute the file as follows in a terminal:
  {{< highlight bash >}}./apku{{< /highlight >}}
5. optional - Use the "Add Desktop Shortcut" option for quick access.

{{< cta-button "APK Utility" "https://github.com/GameTheory-/apk-utility/releases" "_blank" >}}
