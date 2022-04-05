---
author: Antonio
title: "Rename Files & Folders Linux Command Line"
date: 2019-10-14T20:00:29-04:00
lastmod: 2022-04-05
draft: false
type: post
url: /rename-files-folders-linux/
description: "Learn how to rename files and folders in linux from the command line. This tutorial will teach you how to use the mv and rename commands to rename files and folders in linux."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/mv.png" alt="Rename Files & Folders Linux Command Line" width="550px" >}}

Lets take a look at how to rename files and folders in linux from the command line.

Sure you can use your GUI and be done with it, but learning to do it from the command line can be quite useful. There's also the added benefit of being able to use these commands in bash scripts.

<!--more-->

In a bash script you can loop through lots of files or folders to rename them quickly and efficiently. Knowing the right commands for the job is key.

We will be going over three different methods to rename files and folders in linux:

- **mv** - For moving source to folder or renaming source.
- **rename** - For renaming source.
- **for loop** - To loop through multiple sources.

## **Renaming Files**

- **Renaming a single file with mv:**

  This will rename "**file01.bak**" to "**file02.txt**".

  {{< highlight bash >}}mv file01.bak file02.txt{{< /highlight >}}

- **Renaming multiple files with mv:**

  First lets create some files for testing in an empty folder.

  This command will create four empty files:

  {{< highlight bash >}}touch file{1..4}.bak{{< /highlight >}}

  You should now have the following files in your folder:

  {{< highlight text >}}file1.bak  file2.bak  file3.bak  file4.bak{{< /highlight >}}

- Now lets run the mv command in a for loop to rename the files and replace the "**.bak**" extension with "**.txt**":

  {{< highlight bash >}}for i in *; do mv "$i" "${i%.bak}.txt"; done{{< /highlight >}}

  The files should now be renamed as follows:

  {{< highlight text >}}file1.txt  file2.txt  file3.txt  file4.txt{{< /highlight >}}

**Renaming multiple files with rename:**

Now we shall use the rename command. If you don't have rename installed you can install it as follows:

{{< highlight bash >}}sudo apt install rename{{< /highlight >}}

If you've been following this tutorial so far then you should have 4 "**.txt**" files in your folder which we will be working with.

<!--adsense-->

- Lets run the following command to rename the files and replace the "**.txt**" extension with "**.bak**":

  {{< highlight bash >}}rename 's/.txt/.bak/' *.txt{{< /highlight >}}

  The files should now be renamed as follows:

  {{< highlight text >}}file1.bak  file2.bak  file3.bak  file4.bak{{< /highlight >}}

- **Change filenames to uppercase:**

  {{< highlight bash >}}rename 'y/a-z/A-Z/' *.bak && rename 's/.BAK/.bak/' *.BAK{{< /highlight >}}

  The files should now be uppercase as follows:

  {{< highlight text >}}FILE1.bak  FILE2.bak  FILE3.bak  FILE4.bak{{< /highlight >}}

  Notice that we ran the rename command twice with different parameters. This is because rename changes the case of the file extension as well. So the second command is to change the extension to lowercase.

- **Change filenames back to lowercase:**

  {{< highlight bash >}}rename 'y/A-Z/a-z/' *.bak{{< /highlight >}}

  The files should now be back to lowercase as follows:

  {{< highlight text >}}file1.bak  file2.bak  file3.bak  file4.bak{{< /highlight >}}

## **Renaming Folders**

- **Renaming a single folder with mv:**

  This will rename "**dir1**" to "**dir2**".

  {{< highlight bash >}}mv dir1 dir2{{< /highlight >}}

- **Removing spaces from multiple folder names with mv:**

  {{< highlight bash >}}for i in *; do mv "$i" "${i// /}"; done{{< /highlight >}}

- **Renaming multiple folders with rename:**

  Renaming multiple folders is much easier and straightforward with the rename command. The mv command is not ideal for this scenario, so we will use the rename command.

  Lets create multiple folders in an empty directory.

  This command will create four empty folders:

  {{< highlight bash >}}mkdir dir{1..4}{{< /highlight >}}

  You should now have the following folders in your directory:

  {{< highlight text >}}dir1 dir2 dir3 dir4{{< /highlight >}}

  Now lets rename the folders to replace the single digit numbers with triple digits.

  {{< highlight bash >}}rename 's/dir/dir00/' dir*/{{< /highlight >}}

  This should be your result:

  {{< highlight text >}}dir001 dir002 dir003 dir004{{< /highlight >}}

## **Conclusion**

This was a quick look at how to rename files and folders in linux from the command line. While the mv command would do just fine, the rename command proves to be more efficient and versatile for renaming files and folders.
