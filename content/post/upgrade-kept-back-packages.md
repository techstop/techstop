---
author: Antonio
title: "Upgrade Kept Back Packages in Linux"
date: 2019-10-29T20:53:17-04:00
draft: false
type: post
url: /upgrade-kept-back-packages/
description: "Follow this tutorial to learn how to upgrade kept back packages in linux. We will show you a simple command to upgrade your kept back packages and get rid of warning."
googleAdsenseVerify: false
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/kept.png" alt="Upgrade Kept Back Packages in Linux" width="150px" >}}

Occasionally when updating your linux system from a terminal, you'll notice a warning stating "The following packages have been kept back". This means that when updating, those packages will not be upgraded. Today we'll look at how to upgrade kept back packages in linux.

<!--more-->

According to <a href="https://debian-administration.org/article/69/Some_upgrades_show_packages_being_kept_back" target="_blank">Debian Administration</a>, if the dependencies have changed on one of the packages you have installed so that a new package must be installed to perform the upgrade then that will be listed as "kept-back".

You'll normally see this warning when performing a system upgrade with the following commands:

{{< highlight bash >}}sudo apt update && sudo apt upgrade{{< /highlight >}}

Now, while probably not a big deal, if you're like me, you'll probably want to resolve this.

## **Upgrade Kept Back Packages**

After you've received the un-welcomed warning, to upgrade the kept back packages is quite simple. You can run the following command:

{{< highlight bash >}}sudo apt dist-upgrade{{< /highlight >}}

Once you run this command, your kept back packages will be upgraded and any new required dependencies will be installed.

## **Conclusion**

That is all for this quick look at how to upgrade kept back packages in linux. That wasn't too bad. Right?
