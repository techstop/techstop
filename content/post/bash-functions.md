---
author: Antonio
title: "Write Bash Functions"
date: 2019-09-30T21:38:41-04:00
draft: false
type: post
url: /bash-functions/
description: "Follow this tutorial to learn how to write bash functions. Functions are a great way to reduce the amount of code you have to write and to keep your code neat."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/func.png" alt="Writing Bash Functions" width="150px" >}}

Writing bash functions is a great way to make your scripts modular. If you find you'll be needing to repeat sets of commands or code logic, it's a good idea to use functions to avoid redundancy in your script. Bash functions also help keep your code neat and easier to maintain.

<!--more-->

A great way to use functions is writing a separate script with just your functions. You can then load your function script from another script as needed.

Bash functions are treated as commands. However, functions need to be defined at the top of your script. The same applies if you're loading a script with your functions, you need to define it at the top of your script.

## **Writing Bash Functions**

Lets take a look at some bash function examples.

This is what your typical bash function looks like:

{{< highlight bash >}}
my_function() {
  echo 'This is a function.'
}
{{< /highlight >}}

To call the function above is as follows:

{{< highlight bash >}}my_function{{< /highlight >}}

Here's what it would look like in a script:

{{< highlight bash >}}
#!/bin/bash

my_function() {
  echo 'This is a function.'
}

my_function
{{< /highlight >}}

Now lets change our function so that we can pass an argument to it.

{{< highlight bash >}}
my_function() {
  echo $1
}
{{< /highlight >}}

To use the function above, you can pass it an argument like this:

{{< highlight bash >}}my_function 'This is a function.'{{< /highlight >}}

This is what it would look like in a script:

{{< highlight bash >}}
#!/bin/bash

my_function() {
  echo $1
}

my_function 'This is a function.'
{{< /highlight >}}

Now lets use a more advanced example. We will now load a function from one script to another.

We need two script files for this example. The first script we name **file1.sh** and the second **file2.sh**.

**file1.sh**:

{{< highlight bash >}}
#!/bin/bash

source /path/to/file2.sh 'This is a function in another script.'
{{< /highlight >}}

**file2.sh**:

{{< highlight bash >}}
#!/bin/bash

message="$1"

my_function() {
  echo $message
}

my_function
{{< /highlight >}}

The first script file is calling the second script and passing it a string argument to print with the echo command within the function. The string argument we pass is held in the $message variable.

Now we would simply execute the **file1.sh** file and see the following output:

{{< highlight text >}}This is a function in another script.{{< /highlight >}}

That will be all for this tutorial. I hope you enjoyed writing bash functions.
