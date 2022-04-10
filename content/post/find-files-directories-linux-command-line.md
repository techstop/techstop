---
author: "Antonio T."
title: "Find Files or Directories in Linux Command Line"
date: 2022-04-10
draft: false
type: post
url: /find-files-directories-linux-command-line/
description: "Follow this tutorial to learn various ways to find files and directories in the linux command line. The find command is extremely versatile providing many options for granular control over your search query."
categories:
- linux
tags:
- tutorials
- linux
- command line
---

{{< image src="/images/linux/find.png" alt="find" width="500px" >}}

The linux find command is one of the best ways to find files and directories in the command line. The find command is extremely versatile providing many options for granular control over your search query. If it exists, the find command will find it.

<!--more-->

The find command can also execute commands on the files or directories found. This allows you to do a multitude of things, like deleting and modifying the files and directories found with a one-liner command.

The syntax for the find command is as follows:

{{< highlight bash >}}
find path options expression
{{< /highlight >}}

- path = By default the current directory is used unless given a path to search in.
- options = Control over your search(ie. files or directories, case, symbolic links, and much more).
- expression = What you're searching for.

## **Find Files by Extension**

In this example we search for all files with the png extension in the current directory.

{{< highlight bash >}}
find . -name '*.png'
{{< /highlight >}}

- The dot(.) indicates the current directory. You can also provide a path to search such as (/home/username/directory).
- (-name) indicates the case sensitive file name.

Here we search for png files in a specific directory.

{{< highlight bash >}}
find /home/username/Pictures -name '*.png'
{{< /highlight >}}

## **Find a File by Name**

Here we search for a file named (file.txt) case **sensitive**.

{{< highlight bash >}}
find . -name 'file.txt'
{{< /highlight >}}

Here we search for a file named (file.txt) case **insensitive**.

{{< highlight bash >}}
find . -iname 'file.txt'
{{< /highlight >}}

- (-name) case sensitive
- (-iname) case insensitive

## **Find Empty Files**

Here we search a directory for empty(0 bytes) files.

{{< highlight bash >}}
find . -type f -empty
{{< /highlight >}}

- (-type f) = Searches for files only.

To delete all empty(0 bytes) files.

{{< highlight bash >}}
find . -type f -empty -delete
{{< /highlight >}}

<!--adsense-->

## **Find Files by Modification Time Frame**

Find files modified in the last 7 days.

{{< highlight bash >}}
find . -daystart -mtime -7
{{< /highlight >}}

## **Run a Command On Each File Found**

Find all png files in directory and display each png file size.

{{< highlight bash >}}
find . -name '*.png' -exec wc -c {} \;
{{< /highlight >}}

- (-exec) Executes a command.
- (wc -c) Command to display file size.
- ({}) All the files found to be processed by (wc -c) command.
- (;) Ends the command executed by (-exec).
- (\\) Escapes the semicolon(;) so that it's not treated as its own special character and instead is passed to the find command.

## **Find Files Within a Size Range**

Find files within 5 and 10 megabytes.

{{< highlight bash >}}
find . -size +5M -size -10M
{{< /highlight >}}

## **Find Directories**

Find a directory named (music).

{{< highlight bash >}}
find . -type d -iname 'music'
{{< /highlight >}}

- (-type d) Search for directories only.

If you only know part of the directory name, you can use wildcards to search for directory names containing the word (music).

{{< highlight bash >}}
find . -type d -iname '*music*'
{{< /highlight >}}

## **Conclusion**

We have step through a few ways to find files and directories efficiently in the linux command line with the find command. For more find command options, view the man page in your terminal:

{{< highlight bash >}}
man find
{{< /highlight >}}
