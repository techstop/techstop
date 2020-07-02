---
author: Antonio
title: "Pause and Resume Wget Downloads"
date: 2019-09-09T20:20:55-04:00
draft: false
type: post
url: /pause-and-resume-wget-downloads/
description: "Often times users ask how to pause and resume wget downloads. Follow this simple tutorial to learn how to pause and resume wget downloads and also learn a few other tricks."
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/linux/wget.png" alt="wget" width="150px" >}}

There are many download managers out there that get the job done, but wget is arguably the best one. Wget is a linux command line utility to manage all types of downloads. Whenever you have any large files to download or need to use the ftp protocol, wget is your best bet. I'll show you a few neat ways to use wget.

<!--more-->

## **wget Download**

You can download any type of file like text based and archives or any other. The typical usage for wget looks as follows.

{{< highlight text >}}wget [options] [url-to-file]{{< /highlight >}}

To download a file we run the basic wget download command as below. Make sure to open your terminal in the directory you wish to download to.

{{< highlight bash >}}wget https://example.com/filename.zip{{< /highlight >}}

That is all. You should now have the file downloaded to the directory you chose.

## **Pause wget Download**

If you find yourself in a situtation where you're downloading a large file and need to shutdown your computer during the download for whatever reason, no problem, you can pause the download.

In the terminal window that is downloading your file just enter the following keyboard shortcut.

{{< highlight text >}}Ctrl + c{{< /highlight >}}

This will stop the download and then you can shutdown your computer if you need. To resume the download, read on.

<!--adsense-->

## **Resume wget Download**

To resume a wget download it's very straight forward. Open the terminal to the directory where you were downloading your file to and run wget with the -c flag to resume the download.

{{< highlight bash >}}wget -c https://example.com/filename.zip{{< /highlight >}}

## **Other wget Uses**

- FTP downloads:

{{< highlight bash >}}wget ftp://ftp.example.com/filename.zip{{< /highlight >}}

- Read download URLs from a file:

{{< highlight bash >}}wget -i filename{{< /highlight >}}

- Specify the directory to download to:

{{< highlight bash >}}wget https://example.com/filename.zip -P /path/to/directory/{{< /highlight >}}

- If you need a download to overwrite an existing file:

{{< highlight bash >}}wget https://example.com/filename.zip -O /path/to/directory/filename.zip{{< /highlight >}}

## **Conclusion**

Wget is a powerful linux command line utility that can suit the needs of both novice and power users alike. What I've covered in this tutorial should suffice for most use cases.

There are many more options you can run with wget. Check out the wget manual for more.

{{< highlight bash >}}man wget{{< /highlight >}}
