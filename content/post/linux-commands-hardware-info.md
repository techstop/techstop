---
author: Antonio
title: "Linux Commands To Get Hardware Info"
date: 2019-09-27T23:29:38-04:00
draft: false
type: post
url: /linux-commands-hardware-info/
description: "Use Linux commands to detect hardware info in your PC. Getting the hardware info you require can be achieved efficiently from the command line in linux."
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/linux/inxi.png" alt="Linux commands for hardware info" width="150px" >}}

It's always a good idea to know how to get hardware info on your linux system. It can be very useful if you need to troubleshoot a hardware issue. There can be times when you need some specific hardware info to get the right drivers. Other times you'll need specific info to perform a hardware upgrade. The command line offers quite a few ways to obtain this hardware info with some tried and true linux commands.

<!--more-->

Now there are a few GUI applications that you can install to get the hardware info, and in most cases this will suffice. My personal favorite GUI application for hardware details is <a href="https://help.ubuntu.com/community/HardInfo" target="_blank">HardInfo</a>. It's a fantastic piece of software. In fact, HardInfo even has some benchmarking tools to test your system's stability. This comes in handy after hardware upgrades or overclocking.

You can install HardInfo as follows.

{{< highlight bash >}}sudo apt install hardinfo{{< /highlight >}}

## **Linux Commands For Hardware Info**

Well now that we've gone over a good GUI, it's time to dig in with what this article is really about. We will go over some Linux commands to get hardware info. Commands can allow for more specific and targeted hardware info. Probably the biggest advantage is the ability to use these commands in a shell script.

**Lets get started, shall we...**

- These next few commands are great for getting an overview of your hardware info.

{{< highlight bash >}}hwinfo --short{{< /highlight >}}

{{< highlight bash >}}lshw --short{{< /highlight >}}

For hardware overview information, this next command is my favorite. I like the neat easy to read output that is arranged by category.

{{< highlight bash >}}inxi -Fxz{{< /highlight >}}

- We will now target just your CPU info.
  
You may not need so much information like the previous commands, but just for your cpu.

{{< highlight bash >}}lscpu{{< /highlight >}}

{{< highlight bash >}}lshw -C cpu{{< /highlight >}}

- Lets focus on your PC memory now.

This command will show the memory size for each RAM stick you have installed in your PC. You do need to run this command with sudo.

{{< highlight bash >}}sudo dmidecode -t memory | grep -i size{{< /highlight >}}

This command also gives you the RAM speed.

{{< highlight bash >}}sudo lshw -short -C memory{{< /highlight >}}

Now here is a very useful command. Ever wanted an easy way to know the max amount of ram you can install in your PC? Well this command does just that.

{{< highlight bash >}}sudo dmidecode -t memory | grep -i max{{< /highlight >}}

If you want to know if there are any empty ram slots available in your PC, you don't need to open it. You can find out with this command. If the command output is empty, that means all ram slots are full.

{{< highlight bash >}}lshw -short -C memory | grep -i empty{{< /highlight >}}

This final command gives us our memory usage.

{{< highlight bash >}}free -m{{< /highlight >}}

## **Conclusion**

We have stepped through a few Linux commands to get hardware info, but we've only scratched the surface. There's many more commands to acquire more hardware information.

Check back to this page as I will add more commands to cover a greater range of hardware.
