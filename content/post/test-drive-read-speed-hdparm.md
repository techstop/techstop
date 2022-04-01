---
author: Antonio
title: "Test Drive Read Speed With hdparm"
date: 2022-04-01T11:58:07-04:00
draft: false
type: post
url: /test-drive-read-speed-hdparm/
description: "Test your SSD or HDD drive read speeds on linux with hdparm. hdparm can give you an accurate representation of the read speeds of your drives to see if they're performing as expected."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/hdparm.png" alt="hdparm" width="400px" >}}

If you'd like to test the read speed of your hard disk drive(HDD) or solid state drive(SSD) or any type of drive, you can use hdparm on linux. hdparm is an excellent command-line tool to test your drive's read speeds. hdparm can give you an accurate representation of the read speeds of your drives to see if they're performing as expected.

<!--more-->

## Determine Disk to Test

Whether you have one or more attached drives to your computer, you need to determine the disk path.

The paths are listed as follows:

- (/dev/hd*) = IDE disks: hard Disk Drives(HDD)
- (/dev/sd*) = SATA disks: Solid State Drives(SSD)
- (/dev/nvme*) = Express pci disks: Non-Volatile Memory Express(NVMe)

## Get Disk Path

To get the disk path we will run the (fdisk) command in our terminal.

{{< highlight bash >}}
sudo fdisk -l
{{< /highlight >}}

As you can see from the output below, my disk path is (/dev/sda).

{{< highlight text >}}
Disk /dev/sda: 119.24 GiB, 128035676160 bytes, 250069680 sectors
Disk model: SAMSUNG SSD 830 
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 0BB9721E-A0BC-734C-99A0-367A0D530AC2

Device      Start       End   Sectors   Size Type
/dev/sda1    4096    618495    614400   300M EFI System
/dev/sda2  618496 250067789 249449294 118.9G Linux filesystem
{{< /highlight >}}

<!--adsense-->

## Test Disk Read Speed

Now that we have determined our disk path, it is time to run our read speed test.

To test the disk read speed we run the following (hdparm) command.

{{< highlight bash >}}
sudo hdparm -t /dev/sda
{{< /highlight >}}

If you look at my output below, you can see that I'm getting "450.51 MB/sec" which is in line with what the manufacturer advertises. Not bad considering it's a ten year old SSD as of the date of this article.

{{< highlight text >}}
/dev/sda:
 Timing buffered disk reads: 1352 MB in  3.00 seconds = 450.51 MB/sec
{{< /highlight >}}

## Conclusion

You should now be able to test read speeds for any attached drive to your computer. For more hdparm options you can run (man hdparm) or ([tldr](https://techstop.github.io/linux-tldr-pages-command/) hdparm) in your terminal.
