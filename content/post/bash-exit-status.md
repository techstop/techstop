---
author: Antonio
title: "Bash Exit Status"
date: 2019-10-15T22:13:36-04:00
lastmod: 2022-02-18
draft: false
type: post
url: /bash-exit-status/
description: "Learn how to get the exit status codes for bash commands. Follow this tutorial which will teach you how to get the exit status codes for any bash commands which you can also use in conditional statements in your scripts."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/stat.png" alt="Bash Exit Status" width="150px" >}}

Regardless of whether a bash command ends successfully or not, it returns an exit status. Aside from letting you know that the command succeeded or failed, you can use the exit status code in bash scripts to determine what action to take with a conditional statement.

<!--more-->

The exit status of a bash command is always an integer (number). A successful command will have an exit status of zero (0), while a command that fails will have an exit status from 1 to 255.

<!--adsense-->

There is a special variable you can use to get the exit status of the previously executed command. You can easily print the exit status variable ($?) with the echo command.

**Take a look at this example or try it yourself:**

Here we run the date command and then print its exit status with the echo command.

{{< highlight bash >}}
#!/bin/bash

date
echo $?
{{< /highlight >}}

**Output:**

As you can see the date was printed on the first line and the successful exit status of zero on the second line.

{{< highlight text >}}
Tue Oct 15 20:27:27 AST 2019
0
{{< /highlight >}}

**Testing with a bad command:**

Now we use the same example, but with a bad command (datefoo) that doesn't exist.

{{< highlight bash >}}
#!/bin/bash

datefoo
echo $?
{{< /highlight >}}

**Output:**

This now gives us a command not found error followed by the exit status code (127).

{{< highlight text >}}
./test.sh: line 3: datefoo: command not found
127
{{< /highlight >}}

**Save the exit status in a variable:**

Saving the exit status for a command in a variable can be useful so that you can use the status later on in your bash script.

In this example we run three commands and save the exit status for each in a variable. One of the commands is not a real command like in our previous example.

{{< highlight bash >}}
#!/bin/bash

# Prints username
echo $(whoami)
var0=$?

# Bad command
datefoo
var1=$?

# Prints the time and date
date
var2=$?

echo "These are the exit statuses for the commands above:"
echo $var0
echo $var1
echo $var2
{{< /highlight >}}

**Output:**

{{< highlight text >}}
gametheory
./test.sh: line 8: datefoo: command not found
Wed Oct 16 12:29:09 AST 2019
These are the exit statuses for the commands above:
0
127
0
{{< /highlight >}}

**Set the exit status in your bash script:**

Lets assume that we have a script called "**test.sh**" for this example.

<!--adsense-->

Here we have the cat command try to read a file that does not exist.

{{< highlight bash >}}
#!/bin/bash

cat foo.txt

if test $? -eq 0; then
  echo "The cat command succeeded because the file exists."
  exit 0
else
  echo "The cat command failed because the file does not exist."
  exit 1
fi
{{< /highlight >}}

To run the file and get the exit status, we execute the following 2 commands in our terminal:

{{< highlight bash >}}
./test.sh
echo $?
{{< /highlight >}}

**Output:**

Since our script was designed to fail for this example, we get the error message and exit status 1 that we declared ourselves.

{{< highlight text >}}
cat: foo.txt: No such file or directory
The cat command failed because the file does not exist.
1
{{< /highlight >}}

**Here are some standard linux status error codes that you can use in your scripts:**

- 0 - Success
- 1 - Catchall for general errors
- 2 - Misuse of shell builtins (according to Bash documentation)
- 126 - Command invoked cannot execute
- 127 - “command not found”
- 128 - Invalid argument to exit
- 128+n - Fatal error signal “n”
- 130 - Script terminated by Control-C
- 255\* - Exit status out of range

## **Conclusion**

This was a quick look at some bash exit status examples. Status exit codes can be quite useful. In large bash scripts it may be a good idea to set some exit status codes for easier troubleshooting of some parts of your code. They're also great to setup conditional statements.
