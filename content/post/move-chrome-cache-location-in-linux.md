---
author: Antonio
title: "Move Chrome Cache Location in Linux"
date: 2019-09-14T14:00:13-04:00
draft: false
type: post
url: /move-chrome-cache-location-in-linux/
description: "There’s many reasons to move the Chrome cache location in Linux. Most commonly, chrome cache is moved to prolong SSD drives. In this tutorial we’ll show you how to move chrome cache in linux."
categories:
- Linux
tags:
- linux
- tutorials
- browser
---

{{< image src="/images/chrome/chrome.png" alt="Chrome Browser" width="500px" >}}

Often times users may want to move the chrome cache location for whatever reason. If you’re like me and have a primary SSD for your operating system and a secondary HDD for storage, then you may want to move the chrome cache location to another drive to reduce writes to your SSD. Reducing heavy caching to your SSD can prolong its lifespan.

<!--more-->

It’s fairly straight forward to move the chrome cache location to another drive in linux.

There are two methods for doing this. The first involves editing the launcher with a cache directory. The problem here is that you’ll have to repeat this method every time chrome updates.

The second method and the one we will be using in this tutorial will be using a symlink. This is a “set it and forget it” method. Once you set your symlink, you will not have to worry about it again, not even after chrome updates.

## **Move Chrome Cache Location**

The symlink command generally looks like this…

{{< highlight text >}}ln -s [new-location] [old-location]{{< /highlight >}}

**This has been tested on xubuntu and ubuntu.**

1. Make sure to close chrome browser.
2. Create a hidden folder in your new location called "**.google-chrome**"
3. Delete the old chrome location usually found at "**/home/USERNAME/.cache/google-chrome**". You can use the following command for this.
   {{< highlight bash >}}rm -rf ~/.cache/google-chrome{{< /highlight >}}
4. Now re-create the old chrome location you deleted as a symlink to the new location with this command.
   {{< highlight bash >}}ln -s /new/location/path/.google-chrome ~/.cache/google-chrome{{< /highlight >}}

After opening chrome, if you'd like to check, open your file manager and go to "**/home/USERNAME/.cache/google-chrome**". Right click on the folder and select "**Properties**". You should see that for "**Volume**" it should show the new cache location.

That is all. You have now moved the chrome cache location in linux and don't need to worry about it anymore.
