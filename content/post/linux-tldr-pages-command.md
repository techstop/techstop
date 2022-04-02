---
author: Antonio
title: "Linux tldr Pages Command"
date: 2022-03-28T21:44:35-04:00
draft: false
type: post
url: /linux-tldr-pages-command/
description: "Linux tldr pages command displays simplified man pages for linux command-line tools. Unlike the man pages, tldr pages is more like a cheat sheet that displays usage examples for linux commands."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/tldr-pages-0.png" alt="tldr tar" width="500px" >}}

Linux tldr pages command displays simplified <a href="https://en.wikipedia.org/wiki/Man_page" target="_blank">man pages</a> for linux command-line tools. Unlike the man pages, tldr pages is more like a cheat sheet that displays usage examples for linux commands.

<!--more-->

tldr stands for (too long, didn't read), which is how I feel sometimes with the man pages.

The tldr pages command displays examples for just about any command you can think of. This really comes in handy when you're not sure how to use a command and want a quick example. Rather than read a long man page, you can simply use tldr instead to quickly get usage examples for a particular command.

<!--adsense-->

## **tldr Command**

- tldr syntax:
{{< highlight bash >}}
tldr <command>
{{< /highlight >}}

To use the tldr command is the same as using the man page command. Here's some examples.

- Example with the (awk) command:
{{< highlight bash >}}
tldr awk
{{< /highlight >}}
{{< image src="/images/linux/tldr-pages-1.png" alt="tldr awk" width="500px" >}}

- Example with the (find) command:
{{< highlight bash >}}
tldr find
{{< /highlight >}}
{{< image src="/images/linux/tldr-pages-2.png" alt="tldr find" width="500px" >}}

## **Conclusion**

As you can see the linux tldr pages command is excellent for quick usage examples for linux command-line tools. I find myself using tldr more than the man pages. So go ahead and give it a try next time you're trying to figure out how to use a command and just want a quick example.
