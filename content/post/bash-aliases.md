---
author: Antonio
title: "Bash Aliases"
date: 2019-10-25T05:14:48-04:00
draft: false
type: post
url: /bash-aliases/
description: "Follow this tutorial to learn how to add and use bash aliases. We will be going over different ways you can make use of aliases in your linux environment to make terminal more efficient to use."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/alias.png" alt="Bash Aliases" width="150px" >}}

If you're not familiar with bash aliases I highly recommend you read on. Bash aliases are fantastic for saving time and not having to remember commands or groups of commands.

A bash alias is just a shortcut that you can set to be a word or even a single letter.

<!--more-->

The syntax for an alias is as follows:

{{< highlight bash >}}alias shortcut='value'{{< /highlight >}}

- **alias** = Command used to set an alias per session.
- **shortcut** = The word or letters you choose to call your commands or groups of commands.
- **value** = The commands you want to call.

There's a few ways to use a bash alias. You can set the alias to call a script, command, or group of commands.

<!--adsense-->

An alias can be set per session, meaning that if you logout or reboot, the alias is removed. You can also set an alias permanently which is how I like to set mine.

## **Temporary Bash Aliases**

Setting up an alias for the current session is straightforward. This method is usually good for setting up an alias that you don't need permanently.

In this example we set an alias for the <a href="https://techstop.github.io/clear-reset-terminal/">clear</a> command. Just enter this in your terminal:

{{< highlight bash >}}alias c='clear'{{< /highlight >}}

Now we just need to type "**c**" in the terminal to clear any output.

{{< highlight bash >}}c{{< /highlight >}}

If you decide you want to remove the alias, you can run the following command:

{{< highlight bash >}}unalias c{{< /highlight >}}

This removes the previous alias we set for the <a href="https://techstop.github.io/clear-reset-terminal/">clear</a> command.

## **Permanent Bash Aliases**

This is my preferred method to add a bash alias. I generally set aliases that I often use.

To add an alias permanently, you would add it to your "**.bashrc**" file. You can do this by opening the file in your text editor and adding the aliases at the bottom of the file.

To add the alias for the clear command, you can add the following to your bashrc:

{{< highlight bash >}}
# My aliases
alias c='clear'
{{< /highlight >}}

Don't forget to restart your terminal to start using your new aliases.

**Note:** We added the "My aliases" comment just for future reference.

<!--adsense-->

You can also add the alias from terminal as follows:

{{< highlight bash >}}
echo "# My aliases" >> .bashrc
echo "alias c='clear'" >> .bashrc
{{< /highlight >}}

To delete an alias, you can just delete it from the bashrc file.

## **View Bash Aliases**

To view all aliases you can just run the alias command. This can be very useful if you ever forget an alias.

Just run the following:

{{< highlight bash >}}alias{{< /highlight >}}

## **Sample Bash Aliases**

Here's some samples of aliases just to give you some ideas. You can really get creative with aliases and handle large tasks with as little as entering a single letter in your terminal.

**<a href="https://techstop.github.io/clear-reset-terminal/">Reset</a> your terminal:**
{{< highlight bash >}}alias r='tput reset'{{< /highlight >}}

**<a href="https://techstop.github.io/update-linux-terminal/">Update</a> your system:**
{{< highlight bash >}}alias update='sudo apt update && sudo apt upgrade -y'{{< /highlight >}}

**Call a bash script:**
{{< highlight bash >}}alias scpt='/path/to/script.sh'{{< /highlight >}}

## **Conclusion**

Bash aliases in linux are a must have. Aliases just makes using the terminal much quicker and efficient and I'm all for that.

That'll be all for this look at bash aliases. If you have any aliases you use regularly that you'd like to share, please do so in the comments below.
