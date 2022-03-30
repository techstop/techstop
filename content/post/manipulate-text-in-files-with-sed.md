---
author: Antonio
title: "Manipulate Text in Files With Sed"
date: 2019-09-22
draft: false
type: post
url: /manipulate-text-files-sed/
description: "Follow along this tutorial to learn some basic usage for the sed linux command line utility. Learn how to manipulate text in files with sed using robust and powerful options."
categories:
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/linux/sed.png" alt="Sed Text Stream Editor" width="150px" >}}

The sed linux utility is a powerful stream editor. Sed can manipulate text from standard input or from a file. It is much like a typical text editor. Where sed sets itself apart is in its ability to filter text in a pipeline to expand its capabilities.

<!--more-->

Sed can work wonders in a shell script. You can pipe other commands to sed or use variables. Use it to process files of all sizes. Find specific strings of text and patterns in your input and manipulate the text to your needs. With sed you can also edit a file directly or save to a new file. The possibilities with sed are near endless.

<!--adsense-->

In this tutorial I will show you some basic and common uses of sed to manipulate text.

## **Manipulate Text With Sed**

Basic sed syntax.

{{< highlight bash >}}sed [options] [command] [file-to-eidt]{{< /highlight >}}

Sed has an extensive list of options to manipulate input. For this tutorial we will be using 2 options.

- [-e] Doesn't edit the file in place, but rather shows the edited output in your terminal. This is good for testing before actually editing a file directly.
- [-i] Edits a file in place. Can also make a backup if you add a suffix. Example: [-i-bak]

Create a file called "**test**" and add the following sentence to it.

{{< highlight text >}}We will learn how to use sed to edit text input streams.{{< /highlight >}}

We will use the above sentence to practice with sed.

**Replace a string with another string.**

In this first example we will replace the word "**learn**" with "**follow**". We will first run a test with the [-e] option just to be sure before making the final edit.

{{< highlight bash >}}sed -e 's/learn/follow/g' test{{< /highlight >}}

You should see the word learn replaced with follow in your terminal output. Now lets make the edit directly to the file with the [-i] option.

{{< highlight bash >}}sed -i 's/learn/follow/g' test{{< /highlight >}}

If you open the test file you'll see the word learn replaced with follow. Now lets change it back to learn, only this time we will make a backup of the original file.

{{< highlight bash >}}sed -i-bak 's/follow/learn/g' test{{< /highlight >}}

As you can see a backup file called "**test-bak**" was created and then the original file was edited. Lets instead use sed to create a new file called "**my-file**" with our changes.

{{< highlight bash >}}sed 's/follow/learn/g' test > my-file{{< /highlight >}}

You should now have the new file with the word follow replaced with learn while the original test file still shows the word follow.

<!--adsense-->

Now that you've learned a few basic examples with sed we can move at a faster pace through the tutorial.

## **More Sed Examples**

**Delete all empty lines with sed.**

If you have a file with multiple lines separated by empty lines you can remove the empty lines easily with sed.

{{< highlight bash >}}sed -i '/^\s*$/d' filename{{< /highlight >}}

**Delete a word or phrase.**

Delete every instance of a word or phrase.

{{< highlight bash >}}sed -i 's/word-to-remove//g' filename{{< /highlight >}}

**Append to the beginning of every line.**

Add a word or phrase to the beginning of each line in a file.

{{< highlight bash >}}sed -i 's/^/word-or-phrase/' filename{{< /highlight >}}

**Append to the end of every line.**

Add a word or phrase to the end of each line in a file.

{{< highlight bash >}}sed -i 's/$/words or patterns/' filename{{< /highlight >}}

**Convert all file contents to uppercase.**

Convert every letter in a file to uppercase.

{{< highlight bash >}}sed -i 's/\(.*\)/\U\1/' filename{{< /highlight >}}

**Convert all file contents to lowercase.**

Convert every letter in a file to lowercase.

{{< highlight bash >}}sed -i 's/\(.*\)/\L\1/' filename{{< /highlight >}}

## **Conclusion**

Sed is an extensive and powerful text stream editor and we only scratched the surface on what it can do. If you'd like to learn more about sed, have a look at the manual. Just run this command in terminal.

{{< highlight bash >}}man sed{{< /highlight >}}
