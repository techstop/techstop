---
author: Antonio
title: "Update Linux in a Terminal"
date: 2019-10-20T22:44:45-04:00
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

**Update software database:**

First we need to update the local software database with the latest software as follows:

{{< highlight bash >}}sudo apt update{{< /highlight >}}

**Perform the update:**

Once the software database updates, then you can update all the software on your system as follows:

{{< highlight bash >}}sudo apt upgrade{{< /highlight >}}

You rarely ever need to reboot after an update unless you also receive a kernel update. After running the second command above, if you see any kernel update mentioned in your terminal, then you should reboot your PC after the update process is done.

## **Conclusion**

Updating linux in the terminal is easier than what some new linux users think. I really recommend going forward that you use this method as your preferred way of keeping your system up to date.

Well that is all for this quick look at updating linux in a terminal.
