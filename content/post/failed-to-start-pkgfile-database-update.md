---
author: "Antonio T."
title: "Failed to Start pkgfile Database Update"
date: 2022-06-21
draft: false
type: post
url: /failed-to-start-pkgfile-database-update/
description: "Follow this tutorial to learn how to fix the 'failed to start pkgfile database update' warning in Manjaro Linux during bootup."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/failed-to-start-pkgfile-database-update.png" alt="Failed To Start pkgfile Database Update" width="500px" >}}

If you're a Manjaro user, chances are you've seen the "failed to start pkgfile database update" warning when booting Manjaro Linux. Though it's just a harmless warning, it can be quite annoying to see.

<!--more-->

According to the <a href="https://wiki.archlinux.org/title/Pkgfile" target="_blank">Arch wiki</a>, pkgfile is a tool for searching files from packages in the official repositories. However, in Manjaro this tool is used by "manjaro-zsh-config". Zsh is the default shell in Manjaro which is utilizing the pkgfile tool.

## **Cause For Warning**

The reason for the "failed to start pkgfile database update" warning is the pkgfile tool is trying to obtain network access during bootup to run its update task. As you may know, the network is not accessible during bootup till you login causing the pkgfile update to fail and trigger the warning.

## **Solution**

Luckily there's an easy fix for this warning. All we need to do is delay the pkgfile update task by 5 minutes. This is more than enough time to login. To do this, follow these steps:

<!--adsense-->

In your file manager navigate to **"/usr/lib/systemd/system"** and open the file named **"pkgfile-update.timer"**.

Now add the following line at the bottom of the "[Timer]" section.

{{< highlight text >}}RandomizedDelaySec=300{{< /highlight >}}

<mark>Note: 300 seconds is equivalent to 5 minutes.</mark>

Your "pkgfile-update.timer" file should look something like this after adding the line with the 5 minute delay.

{{< highlight bash >}}
[Unit]
Description=pkgfile database update timer

[Timer]
OnCalendar=daily
AccuracySec=6h
Persistent=yes
RandomizedDelaySec=300

[Install]
WantedBy=multi-user.target
{{< /highlight >}}

## **Conclusion**

You should now have the "failed to start pkgfile database update" warning fixed. You can now reboot and never see that warning again.
