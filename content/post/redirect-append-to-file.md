---
author: Antonio
title: "Redirect and Append to a File in Linux"
date: 2019-10-18T21:30:46-04:00
draft: false
type: post
url: /redirect-append-to-file/
description: "Learn how to redirect and append to a file in linux. Follow this tutorial which will teach you how to redirect and append a command's stdout to a file from the linux command line."
googleAdsenseVerify: false
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/redirect.png" alt="Redirect and Append to a File in Linux" width="150px" >}}

On every linux system you can redirect and append to the end of a file.

Linux has "stdout" which stands for "standard output". Whenever you run a command in your terminal, the result is displayed in the stdout. You can redirect and append stdout to the end of a file.

<!--more-->

There's two ways to approach this. You can use a single greater-than "**>**" symbol which creates a new file each time and redirects stdout to it. You can also redirect stdout by appending the output with double greater-than "**>>**" symbols which simply adds the output to the end of the file.

## **Redirecting & Appending to a File**

To better understand this concept, lets take a look at some examples.

The following two commands "**initially**" achieve the same. They both create a new file called "**file.txt**" and redirect the stdout of the echo command to the file. The real difference is if your redirecting stdout to a file that already exists (more on this later).

**Redirect to a newly created file:**

With the single ">" symbol we will create "file.txt" every time we run the command, even if the file already exists. This means you cannot "append" to the end of a file with the single ">" symbol.

{{< highlight bash >}}echo "Hello World." > file.txt{{< /highlight >}}

**Redirect to a newly created file or an existing file:**

With the double ">>" symbol the file is created if it doesn't exist, but if it does exist then stdout is appended to the end of the file instead.

{{< highlight bash >}}echo "Hello World." >> file.txt{{< /highlight >}}

To test this for yourself, run the first example above twice. You'll notice that the second time you ran the command the file did not change. This is because the file is created new each time and then stdout is appended to it.

Now run the first example and then the second example and you will notice that "Hello World" is repeated twice in the file. This is because the second example appended stdout to the already existing file that was created by the first example.

## **Conclusion**

Keep in mind that you can redirect the stdout of most commands in linux. We used the echo command for simplicity.

There are different situations that will determine the best way to redirect stdout. If you need to redirect and have any previous data in the file overwritten, then you will need to use a single ">" symbol. Now if you need to append all output to the same file keeping all previous data, then you will need to use a double ">>" symbol.

That's all for our quick look at redirecting and appending to a file in linux.
