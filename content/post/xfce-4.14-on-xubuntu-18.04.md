---
author: Antonio
title: "Install Xfce 4.14 on Xubuntu 18.04"
date: 2019-08-27T21:18:59-04:00
draft: false
type: post
url: /xfce-4-14-on-xubuntu-18-04/
description: "Install Xfce 4.14 on Xubuntu 18.04 easily with a couple of commands. Follow our tutorial that shows you how to do the upgrade from an Xfce 4.14 ppa."
categories:
- Tutorials
- Linux
tags:
- linux
- tutorials
---

{{< image src="/images/xfce/xfce.png" alt="xfce" width="150px" >}}

After over 4 years of development, Xfce 4.14 was released on Aug 12, 2019. There were some major changes and improvements to xfce, most notably the switch from GTK2 to GTK3. This was the main reason for the long development period.

<!--more-->

There are many highlights in this update, but since this article is a tutorial on how to install xfce 4.14 on xubuntu 18.04 I will not go over these updates. Instead you can visit the <a href="https://www.xfce.org/about/news/?post=1565568000" target="_blank">Xfce website</a> for all the details.

## **How To Install Xfce 4.14 on Xubuntu 18.04**

To install xfce 4.14 on xubuntu 18.04 we will be adding the staging <a href="https://launchpad.net/~xubuntu-dev/+archive/ubuntu/staging" target="_blank">PPA</a> for xubuntu. I'll also show you how to revert back to your original xfce 4.12 in case you don't like xfce 4.14.

Run the following in your terminal...

{{< highlight bash >}}
sudo add-apt-repository ppa:xubuntu-dev/staging
sudo apt-get update
{{< /highlight >}}

That is all. You can now update to Xfce 4.14. Enjoy!

## **Revert Back From Xfce 4.14 to 4.12 on Xubuntu 18.04**

To revert back to xfce 4.14 you will need ppa-purge. Just run the following commands in terminal and you'll be right back to xfce 4.12...

{{< highlight bash >}}
sudo apt install ppa-purge
sudo ppa-purge ppa:xubuntu-dev/staging
{{< /highlight >}}

After this you'll be right back on xfce 4.12. I recommend you reboot your pc for good measure.
