---
author: "Antonio T."
title: "Delete Lines or Strings Between Two Patterns With Sed"
date: 2022-04-07T22:48:26-04:00
draft: false
type: post
url: /delete-lines-strings-between-two-patterns-sed/
description: "Follow this tutorial to learn various ways to delete lines or strings between two patterns with the linux sed command stream editor."
categories:
- linux
tags:
- tutorials
- linux
- command line
---

{{< image src="/images/linux/sed-1.png" alt="sed" width="500px" >}}

In this tutorial we will go through various ways to delete lines or strings between two patterns with the linux sed command stream editor.

<!--more-->

For this tutorial we will use a plain text file named (**file.txt**) with the following contents:

{{< highlight text >}}
PATTERN-1
- One
- one
- Two
- two
PATTERN-2
- one
- two
- One
- Two
PATTERN-3
- three
{{< /highlight >}}

Notice that each word is repeated in both lower and uppercase.

## **Delete a Line Containing a Specific String Between Two Patterns**

Delete the line containing the lowercase (one) between PATTERN-1 and PATTERN-2:

{{< highlight bash >}}
sed -i '/PATTERN-1/,/PATTERN-2/{/one/d}' file.txt
{{< /highlight >}}

Delete the line containing the uppercase (One) between PATTERN-1 and PATTERN-2:

{{< highlight bash >}}
sed -i '/PATTERN-1/,/PATTERN-2/{/One/d}' file.txt
{{< /highlight >}}

Delete the lines containing both lower and uppercase (O/one) between PATTERN-1 and PATTERN-2:

{{< highlight bash >}}
sed -i '/PATTERN-1/,/PATTERN-2/{/[oO]ne/d}' file.txt
{{< /highlight >}}

## **Delete Line Number Ranges**

If you know the line numbers you can delete them by range(from a line number to another).

Delete lines 4 to 9:

{{< highlight bash >}}
sed -i '4,9d' file.txt
{{< /highlight >}}

## **Delete All Lines Between Two Patterns**

Delete all the lines between PATTERN-2 and PATTERN-3:

{{< highlight bash >}}
sed -i '/PATTERN-2/,/PATTERN-3/{//!d}' file.txt
{{< /highlight >}}

Delete all the lines between PATTERN-2 and PATTERN-3 including the patterns:

{{< highlight bash >}}
sed -i '/PATTERN-2/,/PATTERN-3/d' file.txt
{{< /highlight >}}

## **Delete All Lines From a Pattern**

Delete all lines from PATTERN-3 and on including the pattern:

{{< highlight bash >}}
sed -i '/PATTERN-3/,$d' file.txt
{{< /highlight >}}

Delete all lines from PATTERN-3 not including the pattern:

{{< highlight bash >}}
sed -i '/PATTERN-3/,//{//!d}' file.txt
{{< /highlight >}}

## **Conclusion**

You should now be able to delete lines or strings between two patterns with sed. sed is a very powerful tool in the linux arsenal that you should be familiar and comfortable with.

For more sed commands, check out my other [sed tutorial](https://techstop.github.io/manipulate-text-files-sed/).
