---
author: "Antonio T."
title: "Find Files Containing a String Pattern in Linux"
date: 2022-05-01
draft: false
type: post
url: /find-files-containing-string-pattern-linux/
description: "Grep is a powerful command line utility to search for files containing text string patterns in linux. In this tutorial we'll be using grep with some common options to refine our file searches for better results."
categories:
- linux
tags:
- tutorials
- linux
- command line
---

{{< image src="/images/linux/grep.png" alt="Grep" width="500px" >}}

Grep is a powerful command line utility to search for files containing text string patterns in linux. In this tutorial we'll be using grep with some common options to refine our file searches for better results.

<!--more-->

The syntax for the grep command is as follows:

{{< highlight bash >}}
grep [options] "pattern" /files|directories/to/search
{{< /highlight >}}

These are some useful and common options for the grep command:

- (-w) Only show matches containing whole words.
- (-i) Ignores upper/lower case distinction.
- (-l) Show the file names of files containing the matching string.
- (-s) Suppress error messages about nonexistent or unreadable files.
- (-o) Print only the matched part of a matching line.
- (-n) Print the line number containing the match.
- (-r) Read all files under a directory and its subdirectories recursively.
- (-R) Same as the (-r) option, but also follows symbolic links.
- (-h) Do not display the file name.

You can use one or more options to refine your search with grep.

Lets take a look at a few examples to find files containing a string pattern with grep.

## **Find Files Containing A String Pattern**

To find a string (linux is awesome) within all text (.txt) files in a given directory you can use the following command in terminal:

{{< highlight bash >}}
grep "linux is awesome" /home/user/*.txt
{{< /highlight >}}

To search in subdirectories you can use the (-r) option:

{{< highlight bash >}}
grep -r "linux is awesome" /home/user/*.txt
{{< /highlight >}}

You can change the file extension to any type of text file you wish to search (.html, .md, .sh, or any other type).

## **Find Files With Case Insensitive Strings**

Use the (-i) option to find case insensitive strings:

{{< highlight bash >}}
grep -i "LINUX is awesome" /home/user/*.txt
{{< /highlight >}}

If you don't know if the string you're searching for is upper or lower case, then you will need to use this option.

<!--adsense-->

## **Find Files With Specific Strings**

To find files containing a specific string use the (-rnw) options:

{{< highlight bash >}}
grep -rnw "linux" /home/user/*.txt
{{< /highlight >}}

## **Use grep In A Shell Script**

grep is an excellent tool to use in shell scripts to automate complex searches.

In this example we'll search for a string pattern and check if it repeats more than once in each file. If it repeats more than once, we'll print the file names.

{{< highlight bash >}}
DIR=/home/user

for i in "$DIR"/*.txt; do
  if [ $(grep -ho 'my-search-pattern' $i | wc -l) -gt 1 ]; then
    echo $(basename $i)
  fi
done
{{< /highlight >}}

As you can see we are piping the grep command to wc which counts how many times the pattern repeats. Then we use the echo command to print the file names of the files that have the pattern repeat more than once.

## **Conclusion**

That was our brief look at the grep command to find files containing a text string pattern. You should now have a good understanding of how to use grep with some useful and common options.
