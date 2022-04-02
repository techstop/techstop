---
author: Antonio
title: "Check Linux OS Version in Terminal"
date: 2019-10-21T20:29:00-04:00
draft: false
type: post
url: /linux-os-version-terminal/
description: "Follow this tutorial to learn how to check linux OS version in terminal. We will be going over a few ways to get your OS and kernel information from the command line."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/osv.png" alt="Check Linux OS Version in Terminal" width="550px" >}}

There are a few ways to check your kernel and linux os version, but today we will cover some commands to do this in a terminal.

Knowing how to check your kernel and linux os version in a terminal can be useful if you ever need help in a forum where they might ask for this information. You can also use this info in a bash script to determine what actions to take in your script based on the kernel and linux os version. Whatever the case may be, it's a good idea to get familiar with these commands.

<!--more-->

## **Linux OS Version**

**Get Linux Standard Base info:**

{{< highlight bash >}}lsb_release -a{{< /highlight >}}

**Output:**

{{< highlight text >}}
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 18.04.3 LTS
Release:	18.04
Codename:	bionic
{{< /highlight >}}

**Or:**

{{< highlight bash >}}cat /etc/lsb-release{{< /highlight >}}

**Output:**

{{< highlight text >}}
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=18.04
DISTRIB_CODENAME=bionic
DISTRIB_DESCRIPTION="Ubuntu 18.04.3 LTS"
{{< /highlight >}}

**Get Linux Standard Base version only:**

{{< highlight bash >}}lsb_release -r{{< /highlight >}}

**Output:**

{{< highlight text >}}Release:	18.04{{< /highlight >}}

**Get full Linux OS information:**

{{< highlight bash >}}cat /etc/*release{{< /highlight >}}

**Output:**

{{< highlight text >}}
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=18.04
DISTRIB_CODENAME=bionic
DISTRIB_DESCRIPTION="Ubuntu 18.04.3 LTS"
NAME="Ubuntu"
VERSION="18.04.3 LTS (Bionic Beaver)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 18.04.3 LTS"
VERSION_ID="18.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=bionic
UBUNTU_CODENAME=bionic
{{< /highlight >}}

**Or:**

{{< highlight bash >}}cat /etc/os-release{{< /highlight >}}

**Output:**

{{< highlight text >}}
NAME="Ubuntu"
VERSION="18.04.3 LTS (Bionic Beaver)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 18.04.3 LTS"
VERSION_ID="18.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=bionic
UBUNTU_CODENAME=bionic
{{< /highlight >}}

<!--adsense-->

**A few more system details:**

{{< highlight bash >}}hostnamectl{{< /highlight >}}

**Output:**

{{< highlight text >}}
   Static hostname: ubuntu
         Icon name: computer-desktop
           Chassis: desktop
        Machine ID: 76b1059e1a6c4453b277aa20f39b4bca
           Boot ID: e936fa2f2f9e4f56a6176921a76acdb8
  Operating System: Ubuntu 18.04.3 LTS
            Kernel: Linux 5.0.0-32-generic
      Architecture: x86-64
{{< /highlight >}}

## **Kernel Version**

**Print the kernel version:**

{{< highlight bash >}}uname -r{{< /highlight >}}

**Output:**

{{< highlight text >}}5.0.0-32-generic{{< /highlight >}}

**Print the kernel version and instruction set:**

{{< highlight bash >}}uname -mrs{{< /highlight >}}

**Output:**

{{< highlight text >}}Linux 5.0.0-32-generic x86_64{{< /highlight >}}

**Print all kernel information:**

{{< highlight bash >}}uname -a{{< /highlight >}}

**Output:**

{{< highlight text >}}Linux ubuntu 5.0.0-32-generic #34~18.04.2-Ubuntu SMP Thu Oct 10 10:36:02 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux{{< /highlight >}}

**Additional kernel information:**

{{< highlight bash >}}cat /proc/version{{< /highlight >}}

**Output:**

{{< highlight text >}}Linux version 5.0.0-32-generic (buildd@lgw01-amd64-015) (gcc version 7.4.0 (Ubuntu 7.4.0-1ubuntu1~18.04.1)) #34~18.04.2-Ubuntu SMP Thu Oct 10 10:36:02 UTC 2019{{< /highlight >}}

**OS type, kernel release number, and version:**

{{< highlight bash >}}cat /proc/sys/kernel/{ostype,osrelease,version}{{< /highlight >}}

**Output:**

{{< highlight text >}}
Linux
5.0.0-32-generic
#34~18.04.2-Ubuntu SMP Thu Oct 10 10:36:02 UTC 2019
{{< /highlight >}}

## **Conclusion**

This concludes our look at how to check your kernel and Linux OS version in terminal. You now know a few ways to obtain the kernel and linux OS information for any situation.
