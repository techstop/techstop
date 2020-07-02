---
author: Antonio
title: "Update Linux in a Terminal"
date: 2019-10-20T22:44:45-04:00
lastmod: 2019-10-21
draft: false
type: post
url: /update-linux-terminal/
description: "Follow this tutorial to learn how to update linux in a terminal. Performing your software updates in a terminal can be quicker and more efficient with the apt command line tool."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/apt.png" alt="Update Linux in a Terminal" width="150px" >}}

Keeping linux updated is a simple hassle free task, unlike that other OS. On linux you can use a GUI app or update in a terminal. Both methods achieve the same result, but users usually have a preference. For me that's the terminal.

<!--more-->

It's very important to keep your system up to date to keep it protected against vulnerabilities. Hackers are always trying new and different ways to obtain your valuable data. Updating will also install software improvements and new features when available.

## **Update With a GUI**

Most linux distributions come with a GUI app to install updates. I'm currently using Xubuntu which comes with "Software Updater". It's a simple app that checks for updates and installs them for you.

Now in my experience with the GUI app in both Ubuntu and Xubuntu, if an application repository changes name you do not get a prompt to confirm this. This is a problem because without your consent, that particular app is not updated and held back. This is why I prefer and recommend the terminal to update since it always gives you the prompt to confirm the repo name change.

## **Update In Terminal**

Updating linux software in the terminal is actually quite simple and only requires two commands.

We will be going over updating Debian and Debian based distros like Ubuntu and all of its derivatives with APT. The Advanced Package Tool(APT) is the command line tool for managing software efficiently from your terminal.

<!--adsense-->

**Update software database:**

First we need to update the local software database with the latest software as follows:

{{< highlight bash >}}sudo apt update{{< /highlight >}}

**Output:**

{{< highlight text >}}
Get:34 http://mirror.umd.edu/ubuntu bionic-security/main amd64 Packages [531 kB]
Get:35 http://mirror.umd.edu/ubuntu bionic-security/main i386 Packages [382 kB]
Get:36 http://mirror.umd.edu/ubuntu bionic-security/main amd64 DEP-11 Metadata [38.5 kB]
Get:42 http://mirror.umd.edu/ubuntu bionic-security/universe DEP-11 48x48 Icons [16.4 kB]  
Get:43 http://mirror.umd.edu/ubuntu bionic-security/universe DEP-11 64x64 Icons [108 kB]
Get:44 http://mirror.umd.edu/ubuntu bionic-security/multiverse amd64 DEP-11 Metadata [2,464 B]
Fetched 8,178 kB in 12s (660 kB/s)
Reading package lists... Done
Building dependency tree
Reading state information... Done
7 packages can be upgraded. Run 'apt list --upgradable' to see them.
{{< /highlight >}}

**Perform the upgrade:**

Once the software database updates, then you can update all the software on your system as follows:

{{< highlight bash >}}sudo apt upgrade{{< /highlight >}}

**Output:**

{{< highlight text >}}
Reading package lists... Done
Building dependency tree
Reading state information... Done
Calculating upgrade... Done
The following NEW packages will be installed:
  linux-headers-5.0.0-32 linux-headers-5.0.0-32-generic linux-image-5.0.0-32-generic
  linux-modules-5.0.0-32-generic linux-modules-extra-5.0.0-32-generic
The following packages will be upgraded:
  distro-info-data libtiff5 libtiff5:i386 linux-generic-hwe-18.04
  linux-headers-generic-hwe-18.04 linux-image-generic-hwe-18.04 linux-libc-dev
7 upgraded, 5 newly installed, 0 to remove and 0 not upgraded.
Need to get 68.7 MB of archives.
After this operation, 332 MB of additional disk space will be used.
Do you want to continue? [Y/n]
{{< /highlight >}}

You rarely ever need to reboot after an update unless you also receive a **kernel update(linux-headers)**. After running the second command above, if you see any kernel update mentioned in your terminal, then you should reboot your PC after the update process is done.

**Update and upgrade in a one line command:**

This one line command combines the previous two commands in a single one-liner. You'll notice it contains a "-y" switch at the end. This will automatically say "yes" to the prompt asking if you wish to update.

{{< highlight bash >}}sudo apt update && sudo apt upgrade -y{{< /highlight >}}

**Update a single package(application):**

If you only wish to update a single package and not the entire system, you can run the following command:
*Replace "package_name" with the package you wish to update*

{{< highlight bash >}}sudo apt upgrade package_name{{< /highlight >}}

## **Conclusion**

Updating linux in the terminal is easier than what some new linux users think. I really recommend going forward that you use this method as your preferred way of keeping your system up to date.

Well that is all for this quick look at updating linux in a terminal.
