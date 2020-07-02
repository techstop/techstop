---
author: Antonio
title: "Install a Global App Menu in Xubuntu 18.04"
date: 2019-10-31T22:07:03-04:00
draft: false
type: post
url: /install-global-app-menu-xubuntu/
description: "Follow this tutorial to learn how to install a global app menu in xubuntu 18.04. We will show you a simple way to install a global app menu plugin for the xfce panel."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/xfce/gm1.png" alt="Install a Global App Menu on Xubuntu 18.04" width="150px" >}}

If you ever used ubuntu when it still used the unity desktop, chances are you liked the unity global app menu and would like to have it on Xubuntu 18.04. Hate it or love it, ubuntu did some things really well when it used unity, like the HUD and the Global App Menu. Luckily, we don't need unity to install a global app menu in Xubuntu 18.04.

<!--more-->

Xubuntu 18.04 has a plugin for the xfce4-panel that you can install to get the global app menu setup for your applications. This plugin is built using the Unity protocol and libraries and provides all features found in the Unity implementation.

In my testing, the global app menu worked quite well and felt just like it did in the unity desktop.

<!--adsense-->

## **Install The Global App Menu**

To install the global app menu in xubuntu 18.04 is a simple process. Just run the following command in terminal:

{{< highlight bash >}}sudo apt install xfce4-appmenu-plugin{{< /highlight >}}

Once you've installed the plugin, add it to your xfce panel.

{{< image src="/images/xfce/gm0.png" alt="Install a Global App Menu on Xubuntu 18.04" width="150px" >}}

After adding the global app menu plugin to your xfce panel, you need to log out and then log back in to enable it.

The global app menu spreads out across your xfce panel just like it did in the ubuntu unity desktop. If you like, you can also make it compact as shown in the screenshots below. Just go to the plugin properties.

{{< image src="/images/xfce/gm2.png" alt="Install a Global App Menu on Xubuntu 18.04" width="150px" >}} {{< image src="/images/xfce/gm3.png" alt="Install a Global App Menu on Xubuntu 18.04" width="150px" >}}

If you'd like to see the way I customize my Xfce desktop, take a look at the following link:

<a href="https://techstop.github.io/make-xfce-look-modern/">Make Xfce Look Modern</a>

## **Conclusion**

That is all for this quick look at how to install a global app menu in Xubuntu 18.04. If you're a fan of this feature from the unity desktop, but have switched to Xubuntu, you don't need to miss out.
