---
author: Antonio
title: "Linux watch Command"
date: 2022-03-23T20:19:29-04:00
draft: false
type: post
url: /linux-watch-command/
description: "In this tutorial we will be looking at the linux **watch** command. The watch command is an excellent tool if you need to run any commands repeatedly at set intervals."
categories:
- linux
tags:
- tutorials
- linux
- command line
---

{{< image src="/images/linux/linux-watch-command.png" alt="linux watch command" width="500px" >}}

In this tutorial we will be looking at the linux **watch** command. watch comes pre-installed on most linux distributions. The watch command is an excellent tool if you need to run any commands repeatedly at set intervals.

<!--more-->

A good example of using watch would be to monitor your cpu clock speeds. We will be using this as an example to demonstrate how to use watch.

## **watch Command Usage**

Here's what the syntax for the watch command looks like:
{{< highlight bash >}}
watch [options] command
{{< /highlight >}}

Lets take a look at how the watch command works by using it to monitor the cpu clock speeds.

Here we use the grep command to filter the output to only show the cpu clock speed "MHz". watch is repeatedly running the grep command to display the cpu clock speeds in real time.
{{< highlight bash >}}
watch grep "MHz" /proc/cpuinfo
{{< /highlight >}}

To exit the watch command use the keyboard shortcut "ctrl+c".

**Terminal output:**
{{< highlight text >}}
Every 2.0s: grep MHz /proc/cpuinfo                 arch: Wed Mar 23 19:26:58 2022

cpu MHz         : 1397.028
cpu MHz         : 1400.000
cpu MHz         : 1400.000
cpu MHz         : 2700.000
{{< /highlight >}}

As you can see from the output above, the top left displays a 2 second interval followed by the command being repeated at that interval. By default, watch repeats a command every 2 seconds. At the top right, the host name, date and time are displayed.

<!--adsense-->

Now lets take a look at some watch command options.

- "-n" Used to set the update interval in seconds.
- "-p" Attempts to make the interval timing precise.
- "-t" Removes the top title info from the output.
- "-g" Exit when the output of command changes.

We will now run the same command as before, but with some of the options illustrated above.
{{< highlight bash >}}
watch -n 1 -p -t grep "MHz" /proc/cpuinfo
{{< /highlight >}}

**Terminal output:**
{{< highlight text >}}
cpu MHz         : 1400.000
cpu MHz         : 1800.000
cpu MHz         : 1400.000
cpu MHz         : 1400.000
{{< /highlight >}}

Looking at the output above, we are now only viewing a clean output of the cpu clock speeds without all the extra information. We also set the interval to repeat every "1" second.

## **Conclusion**

This concludes our quick look at the linux watch command. You should now have a good understanding of how to make use of watch. For more watch command options you can view the manual by entering "**man watch**" in your terminal.
