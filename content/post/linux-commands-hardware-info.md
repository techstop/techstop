---
author: Antonio
title: "Linux Commands To Get Hardware Info"
date: 2019-09-27T23:29:38-04:00
lastmod: 2020-06-29
draft: false
type: post
url: /linux-commands-hardware-info/
description: "Use Linux commands to detect hardware info in your PC. Getting the hardware info you require can be achieved efficiently from the command line in linux."
categories:
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/linux/inxi.png" alt="Linux commands for hardware info" width="150px" >}}

It's always a good idea to know how to get hardware info on your linux system. It can be very useful if you need to troubleshoot a hardware issue. There can be times when you need some specific hardware info to get the right drivers. Other times you'll need specific info to perform a hardware upgrade. The command line offers quite a few ways to obtain this hardware info with some tried and true linux commands.

<!--more-->

Now there are a few GUI applications that you can install to get the hardware info, and in most cases this will suffice. My personal favorite GUI application for hardware details is <a href="https://help.ubuntu.com/community/HardInfo" target="_blank">HardInfo</a>. It's a fantastic piece of software. In fact, HardInfo even has some benchmarking tools to test your system's stability. This comes in handy after hardware upgrades or overclocking.

<!--adsense-->

You can install HardInfo as follows.

{{< highlight bash >}}sudo apt install hardinfo{{< /highlight >}}

## **Linux Commands For Hardware Info**

Well now that we've gone over a good GUI, it's time to dig in with what this article is really about. We will go over some Linux commands to get hardware info. Commands can allow for more specific and targeted hardware info. Probably the biggest advantage is the ability to use these commands in a shell script.

**Lets get started, shall we...**

If you do not have any of the linux utilities in this tutorial, you can install them in your terminal as follows.

{{< highlight bash >}}sudo apt install <name-of-utility>{{< /highlight >}}

- **These next few commands are great for getting an overview of your hardware info.**

{{< highlight bash >}}hwinfo -short{{< /highlight >}}

{{< highlight bash >}}lshw -short{{< /highlight >}}

For hardware overview information, this next command is my favorite. I like the neat easy to read output that is arranged by category.

{{< highlight bash >}}inxi -Fxz{{< /highlight >}}

- **We will now target just your CPU info.**
  
You may not need so much information like the previous commands, but just for your cpu.

{{< highlight bash >}}lscpu{{< /highlight >}}

{{< highlight bash >}}lshw -C cpu{{< /highlight >}}

- **Lets focus on your PC memory now.**

This command will show the memory size for each RAM stick you have installed in your PC. You do need to run this command with sudo.

{{< highlight bash >}}sudo dmidecode -t memory | grep -i size{{< /highlight >}}

This command also gives you the RAM speed.

{{< highlight bash >}}sudo lshw -short -C memory{{< /highlight >}}

Now here is a very useful command. Ever wanted an easy way to know the max amount of ram you can install in your PC? Well this command does just that.

{{< highlight bash >}}sudo dmidecode -t memory | grep -i max{{< /highlight >}}

If you want to know if there are any empty ram slots available in your PC, you don't need to open it. You can find out with this command. If the command output is empty, that means all ram slots are full.

<!--adsense-->

{{< highlight bash >}}lshw -short -C memory | grep -i empty{{< /highlight >}}

This final command gives us our memory usage.

{{< highlight bash >}}free -m{{< /highlight >}}

- **Here are some commands to get disks, devices, and file systems.**

I like this next command. It displays the device path for any mounted HDD, SSD, and USB drives.

{{< highlight bash >}}sudo lshw -short -C disk{{< /highlight >}}

The next command is more targeted at a specific drive by using the device path you get from the previous command above.

{{< highlight bash >}}sudo hdparm -I /dev/sda{{< /highlight >}}

If you'd like to get an idea of how fast your HDD or SSD read speeds are, you can run a test as follows. You just need the device path as the previous command.

{{< highlight bash >}}sudo hdparm -Tt /dev/sda{{< /highlight >}}

This following command is quite common. You can use it to list all disks with their partitions, mount points, and sizes.

{{< highlight bash >}}lsblk{{< /highlight >}}

This is yet another to list sector count, file system, type, and ID.

{{< highlight bash >}}sudo fdisk -l{{< /highlight >}}

Along with file systems and mount points, this next command also lists space used and available in megabytes.

{{< highlight bash >}}df -m{{< /highlight >}}

These next two list USB and PCI devices.

{{< highlight bash >}}lsusb{{< /highlight >}}

{{< highlight bash >}}lspci{{< /highlight >}}

- **Some commands for network hardware info.**

List hardware information for your network card.

{{< highlight bash >}}lshw -C network{{< /highlight >}}

List network interfaces.

{{< highlight bash >}}ifconfig -a{{< /highlight >}}

- **Wrapping things up with installed software information.**

Details about your current OS installation.

{{< highlight bash >}}cat /etc/os-release{{< /highlight >}}

Kernel details.

{{< highlight bash >}}uname -a{{< /highlight >}}

Finally we get some details about the BIOS.

{{< highlight bash >}}sudo dmidecode -t bios{{< /highlight >}}

## **Conclusion**

We have stepped through quite a few Linux commands to get hardware info. There's many more commands you can learn in time. With the one's we've covered in this tutorial you should be covered for most situations.

If there's any more linux commands to get hardware info that you think should be included in this tutorial, feel free to share them in the comments below with some details.
