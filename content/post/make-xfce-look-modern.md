---
author: Antonio
title: "Make Xfce Look Modern"
date: 2019-09-12T14:06:22-04:00
lastmod: 2019-09-13
draft: false
type: post
url: /make-xfce-look-modern/
description: "In this tutorial we will teach you how to make Xfce look modern and beautiful. We will show you some neat customizations and downloads to make your Xfce look modern."
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/xfce/xf0.png" alt="xfce" width="120px" >}} {{< image src="/images/xfce/xf1.png" alt="xfce" width="120px" >}} {{< image src="/images/xfce/xf2.png" alt="xfce" width="120px" >}}

Xfce is a lightweight and powerful desktop environment(DE) that's been around for a long time. It's considered one of the most stable and lightest DEs around. Xfce has a traditional layout well suited for users of all types, from the new user coming from Windows to the power user looking to get things done efficiently.

<!--more-->

One complaint that some users have is that Xfce looks dated, boring, and bland. So I'm going to show you how to make Xfce look modern and beautiful. When we're done, it'll look just as modern as the bigger DE projects like Gnome.

<!--adsense-->

**For this tutorial I'm using xubuntu 18.04.3.**

## **Wallpaper**

Lets start with the wallpaper. A good wallpaper can make a big difference in the overall look. If you like the wallpaper from the screenshots, you can download it below.

{{< cta-button "Wallpaper" "https://github.com/GameTheory-/MyStuff/raw/master/xfce/bg-01.zip" >}}

## **Theme**

We will now install Arc-Dark theme which in my opinion is the best dark theme available. This theme looks modern an consistent. Download it here...

<a href="https://www.xfce-look.org/p/1181106/#files-panel" target="_blank">Arc-Dark-Theme</a>

The original Arc-Dark theme from the link above highlights the app icon in blue on the panel for the app in focus. I prefer a dark grey highlight which I feel looks better. If you prefer the same then you can get my modified version of Arc-Dark below.

{{< cta-button "Custom Arc-Dark" "https://github.com/GameTheory-/MyStuff/raw/master/xfce/Arc-Dark-Theme.zip" >}}

1. Once you have the theme, extract and copy the Arc-Dark folder to **/usr/share/themes**. You will need sudo permissions to do this.
2. After copying the theme to **/usr/share/themes** you will need to enable it in 3 locations. Open the "**Settings Manager**" and enable Arc-Dark in the following locations...

- Appearance
- Window Manager
- LightDM GTK+ Greeter Settings

## **Window Manager Tweaks**

In the "**Settings Manager**" under "**Window Manager Tweaks**" it is important that you disable "**Show shadows under dock windows**" in the "**Compositor**" tab. We need this disabled to setup our top panel in a later step.

Here is a screenshot of my compositor settings.

{{< image src="/images/xfce/wmt0.png" alt="xfce" width="150px" >}}

## **Panels**

The top panel is comprised of 3 panels side by side. This is the only way to center the clock on Xfce panel without having the clock shift side to side when applicatons are opened and closed. For the panel I'm using a mostly transparent 32 pixel height image I created with a 1.5 pixel line to look like a shadow on the bottom. You can download the panel image below.

{{< cta-button "Transparent Panel" "https://github.com/GameTheory-/MyStuff/raw/master/xfce/panel-01.zip" >}}

If you're using the image, make sure to set the panel row size to 32 pixels like in the screenshots.

**Left panel screenshots**
{{< image src="/images/xfce/lp0.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/lp1.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/lp2.png" alt="xfce" width="80px" >}}

**Center panel screeshots**
{{< image src="/images/xfce/mp0.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/mp1.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/mp2.png" alt="xfce" width="80px" >}}

**Right panel screeshots**
{{< image src="/images/xfce/rp0.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/rp1.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/rp2.png" alt="xfce" width="80px" >}}

**Note:** Make all separators transparent. For the middle panel with the clock, expand the separators.

For the left panel I changed the Whisker Menu icon from the xfce mouse to the ubuntu icon. Here's the icon download.

{{< cta-button "Ubuntu Icon" "https://github.com/GameTheory-/MyStuff/raw/master/xfce/ubuntu-logo-01.zip" >}}

After downloading the icon, copy it to **/usr/share/pixmaps**. You'll need sudo permissions to do this.

<!--adsense-->

To change the whisker menu icon just right click on it and select properties then click on the icon. You can use this screenshot as a guide to set up your whisker menu.

{{< image src="/images/xfce/wm0.png" alt="xfce" width="80px" >}}

The bottom launcher is just another panel set to full transparency. You can use the screenshots to guide you.

{{< image src="/images/xfce/bp0.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/bp1.png" alt="xfce" width="80px" >}} {{< image src="/images/xfce/bp2.png" alt="xfce" width="80px" >}}

## **Icons**

The icon theme that I'm using is the Pop Icon theme from <a href="https://distrowatch.com/table.php?distribution=popos" target="_blank">Pop!_OS</a>. To install it run the following commands in your terminal.

{{< highlight bash >}}
sudo add-apt-repository ppa:system76/pop
sudo apt update
sudo apt install pop-icon-theme
{{< /highlight >}}

Once installed you can open "**Settings Manager**" and go to "**Appearance**" and "**LightDM GTK+ Greeter Settings**" to enable **Pop** icons for both.

## **Mouse Cursor**

For the mouse cursor I'm using the Breeze theme from the KDE desktop. Run the following command in the terminal to install the Breeze cursor theme.

{{< highlight bash >}}sudo apt install breeze-cursor-theme{{< /highlight >}}

Once installed you can open "**Settings Manager**" and go to "**Mouse and Touchpad**" and select "**Breeze**" in the theme tab.

## **Notifications**

For my notifications I have set the "**Greybird**" theme and set the opacity to 85%. Here's a screenshot of my notifications settings.

{{< image src="/images/xfce/noti0.png" alt="xfce" width="100px" >}}

## **Text Editor Arc-Dark Theme**

For your text editor you will need a separate theme. Luckily there is a matching Arc-Dark theme for most text editors.

You can get the theme with instructions on how to apply it here...

<a href="https://techstop.github.io/arc-dark-theme-for-gedit/">Arc-Dark Theme For Gedit</a>

**Note:** The theme says it's for gedit, but it works on most text editors. It has worked for me on every text editor I've tried in xubuntu.

## **Conclusion**

Xfce may be one of the oldest desktops, but there's no reason why it can't look modern with a little elbow grease.

If you'd like to take your Xfce desktop to the next level, check out this article...

<a href="https://techstop.github.io/xfce-4-14-on-xubuntu-18-04/">Xfce 4.14 On Xubuntu 18.04</a>

If you have any questions or tips, feel free to ask or share in the comments below.
