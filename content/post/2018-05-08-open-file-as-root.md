---
author: Antonio
date: 2018-05-08 22:33:30+00:00
lastmod: 2022-03-26
draft: false
title: Open File as Root
type: post
url: /open-file-as-root/
description: "In this tutorial we'll look at how to properly open files and directories as root in linux. Graphical applications in linux should never be opened with sudo."
categories:
- Linux
tags:
- Linux
- Tutorials
---

{{< image src="/images/open-as-root/open-file-as-root-0.png" alt="Open File as Root" width="300px" >}}
{{< image src="/images/open-as-root/open-file-as-root-1.png" alt="Open File as Root" width="300px" >}}

If you need to open a file as root in linux you should never use sudo. Sudo can cause files and folders in your home directory to be owned by root. The key is to open graphical applications with root privileges while maintaining user ownership. The proper way was to use gksu or gksudo which are the graphical variants of sudo. These prevented files and folders from being owned by root. Unfortunately gksu and gksudo are no longer available for most linux distributions.

<!--more-->

<!--adsense-->

So what is the proper way now to open a file or directory as root in linux?

Some linux distros have implemented their own way of handling root for graphical applications. For example, distros using the KDE desktop environment use (kdesu) to open graphical applications with root privileges.

In this tutorial I'll be showing you a method that works across most linux distributions. It involves using the admin command which presents you with a graphical password prompt to grant root.

## Linux admin:// Command

Here’s what the admin command looks like.

{{< highlight bash >}}admin://{{< /highlight >}}

If for example, you need to open a file in a text editor like gedit as root. Enter the following command in a terminal to open a file in gedit as root. Make sure to change (/path/to/file) to the actual absolute path to a file you wish to open as root.

{{< highlight bash >}}gedit admin:///path/to/file{{< /highlight >}}

You can use the admin command with your preferred text editor.

<!--adsense-->

To open a directory as root with your file manager, enter the following in a terminal. In this example we’ll be using thunar file manager, but you can use nautilus or whichever you have installed on your system. Again replace (/path/to/directory) to the actual absolute directory path you wish to open as root.

{{< highlight bash >}}thunar admin:///path/to/directory{{< /highlight >}}

You can use the admin command with your preferred file manager.

## Conclusion

So there you have it, a proper way to open graphical applications as root. If this is at all confusing just leave a comment below and we’ll try to help.
