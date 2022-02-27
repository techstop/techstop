---
author: Antonio
title: "Bash Arrays"
date: 2019-10-08T20:09:14-04:00
draft: false
type: post
url: /bash-arrays/
description: "Learn a few tricks and ways to use bash arrays. This tutorial will teach you a few simple ways to write bash arrays along with some tricks to manipulate the array items."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/array.png" alt="Bash Arrays" width="150px" >}}

Bash arrays are quite powerful and robust, but not often used in the command line. They are variables which contain multiple values often referred to as items or elements. Arrays do not have a maximum limit for items they can contain nor do the values need to be assigned or indexed contiguously.

<!--more-->

## **Writing and Using Bash Arrays**

The first item in an array is indexed at position zero "0". You can add multiple items to an array in one variable or through multiple variables.

<!--adsense-->

**In this example we have an array variable with 2 items, each quoted:**

{{< highlight bash >}}val=( "Hello" "World!" ){{< /highlight >}}

**Here we add 5 more items to the array:**

{{< highlight bash >}}
val+=( "My name is" )
val+=( "John" )
val+=( "Doe" )
val+=( "and I'm testing" )
val+=( "bash arrays." )
{{< /highlight >}}

Notice the plus "+" sign.

If you're following, between the 2 examples our array now has 7 items in it.

**Display all items in the array:**

{{< highlight bash >}}echo "${val[@]}"{{< /highlight >}}

**Output:**

{{< highlight text >}}
Hello World! My name is John Doe and I'm testing bash arrays.
{{< /highlight >}}

**Display each index in the array:**

Here we add and exclamation "!" symbol to retrieve the indexes.

{{< highlight bash >}}echo "${!val[@]}"{{< /highlight >}}

**Output:**

Looking at the output, you can see there's 7 items.

{{< highlight text >}}0 1 2 3 4 5 6{{< /highlight >}}

**Display the array length:**

This will give you the sum of items in the array.

{{< highlight bash >}}echo "${#val[@]}"{{< /highlight >}}

**Output:**

{{< highlight text >}}7{{< /highlight >}}

**Display items by index position:**

Here we reference items 3 and 4.

{{< highlight bash >}}
echo "${val[3]}"
echo "${val[4]}"
{{< /highlight >}}

**Output:**

{{< highlight text >}}John Doe{{< /highlight >}}

**Capitalize the first letter in an item:**

For this next example we're going to use the last item in the array at index 6. Notice the single caret "^" symbol. This capitalizes the first letter in the array.

{{< highlight bash >}}echo "${val[6]^}"{{< /highlight >}}

**Output:**

{{< highlight text >}}Bash arrays{{< /highlight >}}

**Capitalize every letter in the array:**

Notice the double caret "^^" symbol. This will capitalize every letter in the array.

{{< highlight bash >}}echo "${val[@]^^}"{{< /highlight >}}

**Output:**

{{< highlight text >}}HELLO WORLD! MY NAME IS JOHN DOE AND I'M TESTING BASH ARRAYS.{{< /highlight >}}

**Make the first letter in an item lowercase:**

We will now use item 3 for this example. Notice the comma ",".

{{< highlight bash >}}echo "${val[3],}"{{< /highlight >}}

**Output:**

{{< highlight text >}}john{{< /highlight >}}

**Make every letter in the array lowercase:**

Notice we are now using double commas ",,".

{{< highlight bash >}}echo "${val[@],,}"{{< /highlight >}}

**Output:**

{{< highlight text >}}hello world! my name is john doe and i'm testing bash arrays.{{< /highlight >}}

**Using a for loop to display all items in the array:**

In this for loop we will iterate through every item using their index as we previously covered in this tutorial.

<!--adsense-->

Take notice how we use the "$i" variable.

{{< highlight bash >}}
for i in ${!val[@]}; do
  echo "${val[$i]}"
done
{{< /highlight >}}

**Output:**

Each item is displayed on its own line.

{{< highlight text >}}
Hello
World!
My name is
John
Doe
and I'm testing
bash arrays.
{{< /highlight >}}

Here's a complete script with a for loop to display our bash array.

{{< highlight bash >}}
#!/bin/bash

val=( "Hello" "World!" )
val+=( "My name is" )
val+=( "John" )
val+=( "Doe" )
val+=( "and I'm testing" )
val+=( "bash arrays." )

for i in ${!val[@]}; do
  echo "${val[$i]}"
done
{{< /highlight >}}

## **Conclusion**

This concludes the tutorial. There's many useful ways to use arrays in bash. This was an introductory run through and only scratches the surface. Hope this gave you some ideas and new tricks for using bash arrays.
