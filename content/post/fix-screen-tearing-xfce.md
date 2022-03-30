---
author: Antonio
title: "Fix Screen Tearing in Xfce"
date: 2019-11-09T23:57:17-04:00
draft: false
type: post
url: /fix-screen-tearing-xfce/
description: "Follow this tutorial to learn how to fix screen tearing in Xfce. We will show you a few simple ways to fix screen tearing in the Xfce desktop environment for Intel, AMD, and Nvidia drivers."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/xfce/scrt0.png" alt="Fix Screen Tearing in Xfce" width="150px" >}}

Xubuntu has always been one of my favorite distros, but it has always been plagued by the dreaded screen tearing because of the Xfce desktop environment. Screen tearing is when the GPU is out of sync with the display which causes artifacting and looks like tears between the top and bottom halves of your screen. This can be rather annoying, but luckily there's easy ways to fix screen tearing in Xfce.

<!--more-->

## **Xfce Compositor**

There are a few ways to fix screen tearing in Xfce, but lets start with the easiest method first.

<!--adsense-->

Note: These methods were tested on Xubuntu 18.04.

Open your Settings Manager then Window Manager Tweaks and under the Compositor tab, enable "**Synchronize drawing to the vertical blank**". In some cases this may fix the screen tearing.

If this method does not work for you then read on.

## **Xorg Configuration**

This is the method that I always use to fix screen tearing in Xfce which has always worked for me.

First find out which graphics driver you're using by running the following command in terminal:

{{< highlight bash >}}inxi -G{{< /highlight >}}

Your output from the above command should look similar to this:

{{< highlight text >}}
gametheory@ubuntu:~$ inxi -G
Graphics:  Card: Intel 3rd Gen Core processor Graphics Controller
           Display Server: x11 (X.Org 1.20.4 ) driver: intel
           Resolution: 1920x1080@60.00hz
           OpenGL: renderer: Mesa DRI Intel Ivybridge Mobile
           version: 4.2 Mesa 19.0.8
{{< /highlight >}}

Now make sure to disable "**Synchronize drawing to the vertical blank**" in the Xfce compositor. Then go to "**/usr/share/X11/xorg.conf.d**" and add one of the files below for your graphics card.

For Intel drivers edit or create a file called "**10-intel.conf**" and add the following then reboot your pc:

{{< highlight text >}}
Section "Device"
  Identifier  "Intel Graphics"
  Driver      "intel"
  Option "TearFree" "true"
EndSection
{{< /highlight >}}

For Radeon drivers edit or create a file called "**10-radeon.conf**" and add the following then reboot your pc:

{{< highlight text >}}
Section "Device"
  Identifier "Radeon"
  Driver "radeon"
  Option "TearFree" "on"
EndSection
{{< /highlight >}}

For AMD drivers edit or create a file called "**10-amdgpu.conf**" and add the following then reboot your pc:

{{< highlight text >}}
Section "Device"
  Identifier "AMDgpu"
  Driver "amdgpu"
  Option "TearFree" "on"
EndSection
{{< /highlight >}}

For Nvidia drivers you'll need to enable "modsetting". Run the following two commands to create a file called "**nvidia-nomodset.conf**" and update the kernel’s initramfs then reboot:

{{< highlight bash >}}
sudo echo "options nvidia-drm modset=1" > /etc/modprobe.d/nvidia-nomodset.conf
sudo update-initramfs -u
{{< /highlight >}}

There are other methods to fix screen tearing for Nvidia drivers, but this seems to be one of the more reliable methods, so it may be worth a shot.

## **Compton Compositor**

Another solution to the screen tearing in Xfce is to disable the xfce compositor and install a lightweight compositor like Compton.

<!--adsense-->

Start by unchecking "**Enable display compositing**" to disable the xfce compositor in the Window Manager Tweaks.

To install compton, run the following in terminal:

{{< highlight bash >}}
sudo apt install compton compton-conf
{{< /highlight >}}

Now we need to setup compton so that it starts on every boot-up. To do this, open "**Session and Startup**" in the Settings Manager and click on the Add button and enter what's in the screenshot below.

{{< image src="/images/xfce/scrt1.png" alt="Fix Screen Tearing in Xfce" width="150px" >}}

You can now open the Compton GUI from your applications menu and adjust any settings you'd like.

{{< image src="/images/xfce/scrt2.png" alt="Fix Screen Tearing in Xfce" width="150px" >}}

## **Conclusion**

Xfce is a fantastic desktop environment that unfortunately has always had a screen tearing issue. Luckily, fixing screen tearing in xfce is a fairly simple task with a variety of methods.

That'll be all for this tutorial. If you have any additional tips to fix screen tearing in Xfce that you'd like to share, please comment below.
