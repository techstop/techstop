---
author: Antonio
title: "Clear or Reset Terminal"
date: 2019-10-22T23:01:23-04:00
draft: false
type: post
url: /clear-reset-terminal/
description: "Follow this tutorial to learn how to clear or reset terminal. We will be going over a few commands to cleanup your terminal when it's full of commands and output."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/crt.png" alt="Clear or Reset Terminal" width="150px" >}}

Whenever you're using the terminal extensively you may find your terminal cluttered with commands and output. This can be rather annoying and even confusing at times with the bash prompt at the bottom of your terminal screen. The solution to this is to clear or reset terminal.

<!--more-->

To clear or reset the terminal in linux is a simple task. We will go over a few commands to do this. Each command will have a notable difference and will be up to you which serves your needs best.

## **Clear Terminal**

Assuming your terminal is cluttered with commands and output, and your bash prompt is now at the bottom as follows:

{{< highlight text >}}
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=18.04
DISTRIB_CODENAME=bionic
DISTRIB_DESCRIPTION="Ubuntu 18.04.3 LTS"
NAME="Ubuntu"
VERSION="18.04.3 LTS (Bionic Beaver)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 18.04.3 LTS"
VERSION_ID="18.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=bionic
UBUNTU_CODENAME=bionic
gametheory@ubuntu:~$
{{< /highlight >}}

<!--adsense-->

You can run the clear command to clean the terminal and have your bash prompt back at the top.

{{< highlight bash >}}clear{{< /highlight >}}

Now notice that after running the clear command you can scroll up with your mouse wheel to see previous output. Essentially the clear command just pushes the clutter up and out of view.

You can also use the keyboard shortcut "**Ctrl + L**" to achieve the same as the clear command.

## **Reset Terminal**

The reset command also cleans up the clutter by re-initializing your terminal. However, the difference is that you cannot scroll up to view previous output. This resets the terminal like if you were opening it for the first time.

{{< highlight bash >}}reset{{< /highlight >}}

Notice that when you run the reset command the terminal takes 1-2 seconds to re-initialize.

**tput reset command:**

The tput reset command does the same as the reset command. The difference here is that it resets the terminal instantly.

{{< highlight bash >}}tput reset{{< /highlight >}}

## **Conclusion**

I mostly use the clear command, but occasionally when I don't want my terminal scrollable, I use the reset command instead. That is all for this quick look at how to clear or reset terminal in linux.
