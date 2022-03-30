---
author: Antonio
title: "Remove Orphaned Packages in Linux"
date: 2019-10-27T23:13:47-04:00
draft: false
type: post
url: /remove-orphaned-packages-linux/
description: "Follow this tutorial to learn how to remove orphaned packages in linux. We will be going over GUI and command line methods that you can easily use to remove the orphaned packages."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/orph0.png" alt="Remove Orphaned Packages in Linux" width="90px" >}}

There are a couple of tools to remove orphaned packages in linux. Packages in linux systems depend on other packages or libraries in order to work properly. In some cases you will already have some or all the dependencies installed from them being installed by other packages.

<!--more-->

When you uninstall packages, often times there are orphaned packages leftover in your linux system. This usually happens when you manually install the dependencies which you may have done to fix a random issue or for another package. It should be said that orphaned packages are not really an issue and simply just take up space, but if you're like me, you probably want them off your system.

<!--adsense-->

We will go over two ways to remove orphaned packages in linux:

1. GtkOrphan is a GUI front end for DebOrphan to remove orphaned packages in a graphical tool.
2. DebOrphan is a command line tool for removing orphaned packages.

## **GtkOrphan**

To get started lets install GtkOrphan. Open your terminal and run the following command:

{{< highlight bash >}}sudo apt install gtkorphan{{< /highlight >}}

Now go to your applications menu and open gtkorphan.

{{< image src="/images/linux/orph1.png" alt="Remove Orphaned Packages in Linux" width="150px" >}}

As soon as you open gtkorphan it will show you a list of orphaned packages if there are any. Right click on any package and choose "**Select All**" and then click **OK** to remove them all.

## **DebOrphan**

Now we will remove orphaned packages from the command line. If you installed **GtkOrphan** then you do not need to install **DebOrphan** since it's installed with **GtkOrphan**.

To install **DebOrphan** just run the following command:

{{< highlight bash >}}sudo apt install deborphan{{< /highlight >}}

To list the orphaned packages if there are any, just enter the following in terminal:

{{< highlight bash >}}deborphan{{< /highlight >}}

**The output on my system:**

{{< highlight bash >}}
gametheory@ubuntu:~$ deborphan
libqqwing2v5:amd64
libevent-2.1-6:amd64
libllvm6.0:amd64
libnatpmp1:amd64
libunique-1.0-0:amd64
xubuntu-restricted-extras:all
libgtkspell0:amd64
libmessaging-menu0:amd64
libgnome-games-support-1-3:amd64
libxfcegui4-4:amd64
{{< /highlight >}}

To remove the orphaned packages you can enter the following command:

{{< highlight bash >}}sudo apt remove --purge `deborphan`{{< /highlight >}}

<!--adsense-->

**Output:**

{{< highlight bash >}}
gametheory@ubuntu:~$ sudo apt remove --purge `deborphan`
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  libavcodec-extra ubuntu-restricted-extras
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  libevent-2.1-6* libgnome-games-support-1-3* libgtkspell0* libllvm6.0*
  libmessaging-menu0* libnatpmp1* libqqwing2v5* libunique-1.0-0* libxfcegui4-4*
  xubuntu-restricted-extras*
0 upgraded, 0 newly installed, 10 to remove and 0 not upgraded.
After this operation, 62.9 MB disk space will be freed.
Do you want to continue? [Y/n]
{{< /highlight >}}

## **Conclusion**

That wraps up our quick look at two ways to remove orphaned packages in linux. Just another way to keep our linux systems clean and efficient.

Have another method to do this? Share it in the comments below.
