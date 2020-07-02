---
author: Antonio
title: "Create Bootable Usb With Terminal in Linux"
date: 2019-09-15T19:19:16-04:00
draft: false
type: post
url: /create-bootable-usb-with-terminal-in-linux/
description: "Learn how to create a bootable USB with terminal in Linux. Use the dd command in the terminal to make a live bootable usb from a linux iso image file to install or try a linux distribution."
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/linux/dd0.png" alt="dd" width="200px" >}}

If you're installing linux, like to distro hop, or simply test different linux distros, you'll often be creating a live bootable usb. There are a few ways to create a bootable usb in linux. Many distros have Startup Disk Creator(usb-creator-gtk) pre-installed which usually gets the job done. There is the rare occasion when using a GUI app just doesn't work. For these rare occasions the dd linux command line utility never fails. This is my preferred method and the one I'll cover in this tutorial.

<!--more-->

## **Create A Bootable USB**

Once you have downloaded the iso image for the linux distro you'd like to test or install, you'll need to plug your usb stick to your computer to get its partition path. To do this we will use **lsblk** in the terminal to get the partition path for the usb stick.

Open the terminal and run this command:
{{< highlight bash >}}lsblk{{< /highlight >}}

**Note:** The root directory for all drives attached to your computer in linux is:

{{< highlight bash >}}/dev{{< /highlight >}}

The name of my usb stick is **Kingston** which is also the brand. As you can see in the screenshot, its partition is:

{{< highlight bash >}}sdd{{< /highlight >}}

{{< image src="/images/linux/dd1.png" alt="lsblk" width="200px" >}}

Now that we know the partition, this is what the full partition path would look like.

{{< highlight bash >}}/dev/sdd{{< /highlight >}}

<!--adsense-->

Assuming that the iso image for the linux distro you wish to burn to your usb stick is in your downloads directory, this is what the command looks like to create the bootable usb. When you run the command you will need to enter your login password. Once you've entered the command, just wait a couple minutes for it to finish.

{{< highlight bash >}}sudo dd bs=4M if=/home/USERNAME/Downloads/FILENAME.iso of=/dev/sdd conv=fdatasync{{< /highlight >}}

As you can see "**if=**" contains the path to our iso image file and "**of=**" contains the usb stick partition path.

## **Boot From USB Stick**

Now that you've created your bootable usb with the terminal in linux, it is time to boot from it. With the usb stick attached to your computer perform a reboot or shutdown. In the startup screen you'll see a key you need to press to get to the boot options (i.e. Esc, F2, F10). In the boot options select to boot from the usb stick.

That is all! You will now boot linux from the usb.

If you have any questions feel free to ask in the comments below.
