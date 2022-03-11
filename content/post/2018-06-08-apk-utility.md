---
author: Antonio
date: 2018-06-08 01:35:25+00:00
lastmod: 2022-03-10
draft: false
title: Apk Utility
type: post
url: /apk-utility/
description: "Apk Utility provides a simple and efficient way to decompile and compile android apk and jar files. Using Apk Utility eliminates the need to use the command line with its simple options menu."
categories:
- Android
- Linux
tags:
- Android
- Linux
- Decompile APK
- apktool
---

{{< image src="/images/apk-utility/apk-utility.png" alt="Apk Utility" width="150px" >}}

If you've been looking for an easy to use tool for decompiling and compiling android apk and jar files then look no further. Apk Utility is as easy to use as it gets. The utility also has the ability to tag your framework files. This feature is very useful when you need to install framework files for multiple different devices without having to remove one for the other. Basically a tag is a label to distinguish between multiple devices' framework files. If you're familiar with <a href="https://ibotpeaches.github.io/Apktool/documentation/" target="_blank">apktool</a> which this tool uses then you'll know what I'm referring to.

<!--more-->

## Getting started

<!--adsense-->

To get started with APK Utility make sure you have java installed on your computer. Place all your apk and jar files in the "input" folder.

Every Apk Utility release contains internally the most up to date AOSP framework at the time of the release. This allows you to decode and build most apks without a problem. However, manufacturers add their own framework files in addition to the regular AOSP ones. To use Apk Utility against these manufacturer apks you must first install the manufacturer framework files. You can do a normal framework install or a tagged framework install. Personally I always use tagged framework installs. This helps me work on multiple devices in an easy and organized way.

## Tagging Framework Files

Lets say you want to have 3 frameworks from 3 different devices installed at once. Assuming those devices are an HTC, LG, and Samsung then you can tag the framework files with the device models as such: M8, G6, S9. Now when you decompile an apk or jar file from any of those 3 devices you simply choose a tag from the list that matches the device.

## Menu Options

1. Standard framework install used when only working on 1 device at any given time.
2. Tagged framework install used for working on multiple different devices.
3. Standard decompile of apk or jar.
4. Decompile without dex. Used when only editing images and xml files.
5. Decompile using device specific framework files tags.
6. Same as option 3, but without dex.
7. Standard compile of apk or jar files.
8. Compile apk or jar file with original signature.
9. A standard zipalign.
10. Sign apk or jar with generic signature. Good for preventing your modded app from updating from the playstore.
11. Manage tags is for removing any tags you may not need anymore.
12. Check for APK Utility updates
13. Create a desktop shortcut in your app menu for quick access to Apk Utility.

## Usage

<!--adsense-->

Tested on manjaro and ubuntu. For 64 bit systems only.

1. Make sure the **apku** file is executable.
2. Make sure to have java 8+ installed.
3. Place all your apk and jar files in the input folder. If zipaligning only, place them in the zipalign folder.
4. Execute the file as follows in a terminal:
  {{< highlight bash >}}./apku{{< /highlight >}}
5. Optional: Use the "Add Desktop Shortcut" option for quick access.

{{< cta-button "Apk Utility" "https://github.com/GameTheory-/apk-utility/releases" "_blank" >}}
