---
author: Antonio
title: "Remove Unused Kernels Ubuntu 18.04"
date: 2019-10-12T22:01:52-04:00
draft: false
type: post
url: /ubuntu-unused-kernels/
description: "Free up space by removing unused kernels in ubuntu 18.04. Follow this tutorial which will teach you how to list and remove the old kernels remaining on your ubuntu 18.04 system."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/lh2.png" alt="Remove Unused Kernels Ubuntu 18.04" width="150px" >}}

A question often asked... How do I remove old unused kernels from ubuntu 18.04?

Each time you receive a kernel update in your ubuntu 18.04 system updates, you end up with the old kernels remaining in your system. This can be useful in the event that the new kernel causes issues, you can always boot the old kernels. In time, old unused kernels can accumulate taking up unnecessary space on your drive.

<!--more-->

I usually use my system for a few days with a new kernel update before removing the old kernels. This gives me time to assess whether the new kernel is stable and my system is running fine. Once I'm certain the system is stable with the new kernel, I will then proceed to remove the old kernels.

<!--adsense-->

## **Remove Unused Kernels**

It's a good idea to view the list of installed kernels on your system to be sure that there are old kernels to remove.

You can list all the kernels on your system with the following dpkg command.

{{< highlight bash >}}dpkg --list | egrep -i 'linux-image|linux-headers'{{< /highlight >}}

Your output should list all the kernels installed on your system like this:

{{< image src="/images/linux/lh0.png" alt="Remove Unused Kernels Ubuntu 18.04" width="150px" >}}

To remove the unused kernels you can run the following command:

{{< highlight bash >}}sudo apt --purge autoremove{{< /highlight >}}

Here's what the output of apt looks like:

{{< image src="/images/linux/lh1.png" alt="Remove Unused Kernels Ubuntu 18.04" width="150px" >}}

Notice in the output above that 661 megabytes of space will be freed by removing the old unused kernels from my ubuntu 18.04 system.

## **Conclusion**

This was a brief look at how to list and remove old unused kernels from ubuntu 18.04. This can be an easy way for you to free up space on your system that you may not even be aware is being consumed.
