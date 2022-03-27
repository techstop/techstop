---
author: Antonio
title: "Create Bootable Usb With Terminal in Linux"
date: 2019-09-15T19:19:16-04:00
lastmod: 2022-03-26
draft: false
type: post
url: /create-bootable-usb-with-terminal-in-linux/
description: "Learn how to create a bootable USB with terminal in Linux. Use the dd command in the terminal to make a live bootable usb from a linux iso image file to install or try a linux distribution."
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/linux/bootable-usb.png" alt="Bootable USB in Linux" width="400px" >}}

If you're installing linux, like to distro hop, or simply test different linux distros, you'll often be creating a live bootable usb. There are a few ways to create a bootable usb in linux. Many distros have Startup Disk Creator(usb-creator-gtk) pre-installed which usually gets the job done. There is the rare occasion when using a GUI app just doesn't work. For these rare occasions the dd linux command line utility can be an excellent substitute. This is my preferred method and the one I'll cover in this tutorial.

<!--more-->

<!--adsense-->

## Create A Bootable USB

Once you have downloaded the iso image for the linux distro you'd like to test or install, you'll need to plug your usb stick to your computer to get its file system partition path. To do this we will use (lsblk) in the terminal to get the partition path for the usb stick.

Open the terminal and run this command:
{{< highlight bash >}}df -h{{< /highlight >}}

This is what my output looks like after running the df command:

{{< highlight text >}}
Filesystem      Size  Used Avail Use% Mounted on
dev             3.7G     0  3.7G   0% /dev
run             3.7G  1.4M  3.7G   1% /run
/dev/sda2       117G   34G   78G  30% /
tmpfs           3.7G   54M  3.6G   2% /dev/shm
tmpfs           3.7G   56M  3.6G   2% /tmp
/dev/sda1       300M  288K  300M   1% /boot/efi
tmpfs           742M   76K  742M   1% /run/user/1000
/dev/sdb        3.8G  663M  3.2G  18% /run/media/gametheory/Sony
{{< /highlight >}}

The name of my usb stick is (Sony) which is also the brand. As you can see in the output above, its file system partition is:

{{< highlight bash >}}/dev/sdb{{< /highlight >}}

**Note:** If your usb stick is not labeled, you can identify it by its size. Mine shows (3.8G).

This is what the command looks like to create the bootable usb. When you run the command you will need to enter your login password. Once you've entered the command, just wait a couple minutes for it to finish.

{{< highlight bash >}}
sudo dd bs=4M if=/path/to/file.iso of=/dev/sdb conv=fsync oflag=direct status=progress
{{< /highlight >}}

As you can see (if=) contains the path to our iso image file and (of=) contains the usb stick file system partition path.

**Note:** Make sure to change (/path/to/file.iso) to the path where you have your iso file.

<!--adsense-->

## Boot From USB Stick

Now that you've created your bootable usb with the terminal in linux, it is time to boot from it. With the usb stick attached to your computer perform a reboot or shutdown. In the startup screen you'll see a key you need to press to get to the boot options (i.e. Esc, F2, F10). In the boot options select to boot from the usb stick.

That is all! You will now boot linux from the usb.

If you have any questions feel free to ask in the comments below.
