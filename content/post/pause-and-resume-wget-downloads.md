---
author: Antonio
title: "Pause and Resume Wget Downloads"
date: 2019-09-09T20:20:55-04:00
lastmod: 2022-04-05
draft: false
type: post
url: /pause-and-resume-wget-downloads/
description: "Often times users ask how to pause and resume wget downloads or how to get the file download size. Follow this simple tutorial to learn how to pause and resume wget downloads and also learn a few other tricks."
categories:
- Linux
tags:
- linux
- tutorials
- command line
---

{{< image src="/images/linux/wget.png" alt="wget" width="550px" >}}

There are many download managers to choose from to manage your downloads, but wget is arguably the best one. Wget is a linux command line utility to manage all types of downloads. Whenever you need to download any files of any size or need to use the ftp protocol, wget is an excellent choice. You can pause and resume wget downloads at any time to your convenience. You can also use wget to get the file download size without actually downloading the file. This can come in handy to compare file sizes before downloading.

<!--more-->

Let me show you a few neat ways to use wget.

## **wget Download**

You can download any type of file like text based and archives or any other. The typical usage for wget looks as follows.

{{< highlight text >}}wget [options] [url-to-file]{{< /highlight >}}

To download a file we run the basic wget download command as below. Make sure to open your terminal in the directory you wish to download to.

{{< highlight bash >}}wget https://example.com/filename.zip{{< /highlight >}}

That is all. You should now have the file downloaded to the directory you chose.

## **Pause wget Download**

If you find yourself in a situtation where you're downloading a large file and need to shutdown your computer during the download for whatever reason, no problem, you can pause the download.

In the terminal window that is downloading your file just enter the following keyboard shortcut.

{{< highlight bash >}}Ctrl + c{{< /highlight >}}

This will stop the download and then you can shutdown your computer if you need. To resume the download, read on.

<!--adsense-->

## **Resume wget Download**

To resume a wget download it's very straight forward. Open the terminal to the directory where you were downloading your file to and run wget with the **-c** flag to resume the download.

{{< highlight bash >}}wget -c https://example.com/filename.zip{{< /highlight >}}

## **Other wget Uses**

Here's some other useful ways to get the most out of wget.

- Wget the file download size without downloading the actual file.
{{< highlight bash >}}wget --spider https://example.com/filename.zip 2>&1 | grep Length{{< /highlight >}}

- Download using the File Transfer Protocol (FTP).
{{< highlight bash >}}wget ftp://ftp.example.com/filename.zip{{< /highlight >}}

- Read download URLs from a file. This can be useful in a shell script.
{{< highlight bash >}}wget -i filename{{< /highlight >}}

- Specify the directory to download to.
{{< highlight bash >}}wget https://example.com/filename.zip -P /path/to/directory/{{< /highlight >}}

- Have your download file overwrite an existing file with the same name.
{{< highlight bash >}}wget https://example.com/filename.zip -O /path/to/directory/filename.zip{{< /highlight >}}

## **Conclusion**

Wget is a powerful linux command line utility for managing downloads that can suit the needs of both novice and power users alike. What I've covered in this tutorial should suffice for most use cases. There are many more options you can run with wget. Check out the wget manual for more.

{{< highlight bash >}}man wget{{< /highlight >}}
