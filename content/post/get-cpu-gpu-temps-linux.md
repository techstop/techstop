---
author: Antonio
title: "Get CPU and GPU Temps in Linux"
date: 2019-11-13T22:28:51-04:00
draft: false
type: post
url: /get-cpu-gpu-temps-linux/
description: "Follow this tutorial to learn how to get cpu and gpu temps in linux. We will use lm-sensors on the command line and GUI to read your system's sensors to determine cpu and gpu temps along with fan speeds and other info."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/sensors1.png" alt="Get CPU and GPU Temps in Linux" width="150px" >}}

To get CPU and GPU temps in linux you need to install and configure lm-sensors. With lm-sensors you can monitor cpu and gpu temperatures and fan speeds as well as voltages for some systems. Lm-sensors reads the available sensors on your motherboard, cpu, and gpu and displays their output. Once configured, you can use the command line or a GUI to monitor your system's sensors.

<!--more-->

## **Setup lm-sensors**

First install lm-sensors by running the following command in your terminal.

{{< highlight bash >}}sudo apt install lm-sensors{{< /highlight >}}

Once the installation completes you will need to setup lm-sensors. It's a straightforward process. Just run the following command in terminal and follow the instructions you see in the terminal.

I always say yes to all the questions asked during the setup. You can always run this command again if you'd like to change anything.

{{< highlight bash >}}sudo sensors-detect{{< /highlight >}}

When the setup is complete you can run this next command to get your cpu and gpu temperatures and fan speeds along with data from any other sensors detected.

{{< highlight bash >}}sensors{{< /highlight >}}

The output from this command will look similar to this:

{{< highlight text >}}
gametheory@ubuntu:~$ sensors
thinkpad-isa-0000
Adapter: ISA adapter
fan1:        2982 RPM

coretemp-isa-0000
Adapter: ISA adapter
Package id 0:  +49.0°C  (high = +87.0°C, crit = +105.0°C)
Core 0:        +49.0°C  (high = +87.0°C, crit = +105.0°C)
Core 1:        +48.0°C  (high = +87.0°C, crit = +105.0°C)
{{< /highlight >}}

If the command line is not your thing and you prefer a GUI to monitor your system's sensors, then you can install xsensors. Xsensors is a gui front-end for lm-sensors.

To install xsensors just run the following command:

{{< highlight bash >}}sudo apt install xsensors{{< /highlight >}}

{{< image src="/images/linux/sensors0.png" alt="Get CPU and GPU Temps in Linux" width="150px" >}}

Another gui that I always install in linux is "System Profiler and Benchmark" which displays the data from your system's sensors and a wealth of other system info. To install it, run the following command.

{{< highlight bash >}}sudo apt install hardinfo{{< /highlight >}}

{{< image src="/images/linux/sensors2.png" alt="Get CPU and GPU Temps in Linux" width="150px" >}}

## **Conclusion**

This wraps up our look at getting cpu and gpu temps in linux. Whether you prefer a gui or the command line, lm-sensors is easily the best tool for probing your system's sensors.

If you have other GUI suggestions, feel free to let us know in the comments below.
