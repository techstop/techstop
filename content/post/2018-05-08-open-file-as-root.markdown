---
author: Antonio
date: 2018-05-08 22:33:30+00:00
draft: false
title: Open File as Root
type: post
url: /open-file-as-root/
categories:
- Linux
- Tutorials
tags:
- Linux
- Tutorials
---

{{< image src="/images/open-as-root/open-file-as-root-0.png" alt="Open File as Root" width="150px" >}}
{{< image src="/images/open-as-root/open-file-as-root-1.png" alt="Open File as Root" width="150px" >}}

If you need to open file as root in linux you should never use sudo. Sudo can cause files and folders in your home directory to be owned by root. The key is to open files or folders with root privileges while maintaining user ownership. The proper way was to use gksu or gksudo which are the graphical variants of sudo. These prevented files and folders from being owned by root. Unfortunately gksu and gksudo are no longer included in the ubuntu family as of version 17.10 or any derivatives of ubuntu.

<!--more-->

So what is the proper way now to open file as root in linux?

Well luckily there is a way that is rather easy. It involves using the admin command instead of gksu or gksudo which presents you with a user password prompt just like gksu. Here’s what the admin command looks like.

{{< highlight bash >}}admin://{{< /highlight >}}

Lets say you need to open a file in a text editor like gedit as root. Enter the following command in a terminal to open a file in gedit as root. Make sure to change "/path/to/file/name" to the actual path to a file you wish to open as root.

{{< highlight bash >}}gedit admin:///path/to/file/name{{< /highlight >}}

To open a directory as root with your file manager, enter the following in a terminal. In this example we’ll be using thunar file manager, but you can use nautilus or whichever you have installed on your system. Again replace "/path/to/directory/name" to the actual directory path you wish to open as root.

{{< highlight bash >}}thunar admin:///path/to/directory/name{{< /highlight >}}

So there you have it, a proper way to open graphical applications as root. If this is at all confusing just leave a comment below and we’ll try to help.
