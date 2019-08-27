---
author: Antonio
title: "Ubuntu 18.04.3 Release with Linux Kernel 5.0"
date: 2019-08-10T15:17:49-04:00
draft: false
type: post
url: /ubuntu-18-04-3-release/
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/ubuntu/ubuntu.png" alt="ubuntu" width="150px" >}}

The ubuntu flavours finally get the highly anticipated linux kernel 5.0. This new kernel brings performance improvements, bug fixes, and more hardware support. You also get an updated X.org and graphics drivers. The 18.04.3 point release was released on Aug 8th 2019.

<!--more-->

I've been using the new kernel for an entire day now and does feel snappier though it can be a placebo effect. Also hard to discern running on a fast SSD. :)

There's been plenty of coverage for the 18.04.3 point release and linux kernel 5.0, so instead I will cover how to install the 5.0 kernel.

## **Do You Have Linux Kernel 5.0**

If you installed the iso for 18.04 or 18.04.1 you will not get the new 5.0 kernel. If you installed 18.04.2 or 18.04.3 then you'll get the new kernel because these point releases have “hardware enablement” (HWE) enabled.

## **How To Install The 5.0 Kernel For 18.04 & 18.04.1**

Open your terminal and run the following command...

{{< highlight bash >}}
sudo apt-get install --install-recommends linux-generic-hwe-18.04 xserver-xorg-hwe-18.04
{{< /highlight >}}

Upon completion you must reboot.

After rebooting open the terminal and confirm the 5.0 kernel is installed with the following command...

{{< highlight bash >}}
uname -r
{{< /highlight >}}

Once you have tested linux kernel 5.0 and are satisfied with it, you will need to remove the old kernel so that it doesn't update and revert back to the old kernel. To remove the old kernel run the following command...

{{< highlight bash >}}
sudo apt remove linux-generic linux-headers-generic linux-image-generic
{{< /highlight >}}

Enjoy kernel 5.0 and new X.org!

Many thanks to <a href="https://www.omgubuntu.co.uk/" target="_blank">OMG! Ubuntu!</a> for the tips and early coverage. You guys rock! ;)
