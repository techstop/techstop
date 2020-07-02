---
author: Antonio
title: "Create A Desktop Launcher In Linux"
date: 2019-09-18T12:36:21-04:00
draft: false
type: post
url: /create-desktop-launcher-linux/
description: "Create a .desktop launcher file in linux to open your applications and scripts. The .desktop launcher will be accessible from the applications menu and any dock or folder."
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/linux/desktop-launcher.png" alt="Desktop Launcher File" width="150px" >}}

There may be times when you will need to create a **.desktop** launcher file in linux. The desktop file is a shortcut to an application for launching it. This desktop file adds a launcher to your applications menu and can also be placed in docks or anywhere you'd like.

<!--more-->

Most applications create their own .desktop launcher file when installed. However, there's the rare occasion when an application will not create one. A good example is the **NetBeans IDE** which doesn't create a desktop launcher.

In this tutorial I will show you how to create a desktop launcher file for any application and script that will be accessible from your applications menu and any dock or folder.

## **How To Create A Desktop Launcher**

The ".desktop" launcher file in linux is just a text file with a "**.desktop**" extension at the end. Here's an example of the contents for a desktop launcher I created for <a href="https://www.gimp.org/" target="_blank">GIMP</a>.

{{< highlight bash >}}
[Desktop Entry]
Type=Application
Name=GIMP
Comment=GNU Image Manipulation Program
Icon=/usr/share/icons/hicolor/48x48/apps/gimp.png
Exec=/usr/bin/gimp
Categories=Graphics;
Terminal=false
{{< /highlight >}}

- **[Desktop Entry]** - This lets the system know it's a desktop launcher file.
- **Type** - This will always be set to **Application**.
- **Name** - You can add whatever name you wish to give the application.
- **Comment** - This describes the application and shows in hint popups when you rest the mouse cursor on the launcher.
- **Icon** - Set the path to any icon image of your liking. You can download one, create it yourself, or use a system icon.
- **Exec** - This will be the path to the executable or script.
- **Categories** - The launcher will be placed under this category in the applications menu. You can choose an appropriate category from your applications menu.
- **Terminal** - This is false for an executable and true for a script that needs to display output in a terminal.

<!--adsense-->

Once you've added all the fields above to your desktop launcher file, save it with a "**.desktop**" extension. For this example I named mine "**gimp-app.desktop**". Now move the desktop file you created to "**/home/USERNAME/.local/share/applications**". Change "**USERNAME**" with your own user name. Finally you can check your applications menu for your new desktop launcher.

## **Conclusion**

As you can see it is really simple to create a .desktop launcher file on linux for any application whether it's third party, one you created, or any script.

If you have any questions feel free to ask in the comments below.
