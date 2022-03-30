---
author: Antonio
title: "Time a Command in Linux"
date: 2019-10-19T22:19:55-04:00
draft: false
type: post
url: /time-command-linux/
description: "Follow this tutorial to learn how to time a command in linux. The time command can be used to time bash scripts with long operations as well as individual commands."
categories:
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/time.png" alt="Time a Command in Linux" width="150px" >}}

Getting familiar with timing commands in linux is a good idea. This is a good way to time long operations in a bash script or from the terminal. You can time most commands and any bash script. My favorite use case is for timing source code compilation from build scripts.

<!--more-->

## **Using The Time Command**

Before we go any further, you need to know that there are two versions of the time command on your system. You'll have "**/usr/bin/time**" and the shell built-in time command. The shell built-in time has less options and not suitable for all use cases.

<!--adsense-->

**Timing the ping command:**

Here we ping the Bing website just for demonstration.

{{< highlight bash >}}time ping bing.com{{< /highlight >}}

**Output:**

{{< highlight text >}}
PING bing.com (204.79.197.200) 56(84) bytes of data.
64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=1 ttl=115 time=70.5 ms
64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=2 ttl=115 time=60.7 ms
64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=3 ttl=115 time=57.1 ms
64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=4 ttl=115 time=69.2 ms
64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=5 ttl=115 time=56.1 ms
64 bytes from a-0001.a-msedge.net (204.79.197.200): icmp_seq=6 ttl=115 time=76.5 ms

--- bing.com ping statistics ---
6 packets transmitted, 6 received, 0% packet loss, time 5006ms
rtt min/avg/max/mdev = 56.187/65.064/76.519/7.522 ms

real	0m5.480s
user	0m0.002s
sys	0m0.002s
{{< /highlight >}}

The final three lines are your time results. In real time, the ping command took 5 seconds.

- **real:** The wall clock time. This is the complete elapsed time it took this operation from beginning to end. This is the time most commonly used.
- **user:** The amount of CPU time spent in user-mode within the process (outside the kernel).
- **sys:** The amount of CPU time spent in the kernel within the process (within the kernel).

Let us now use the formatting switch "-f" and elapsed clock "%E" option to print the time in a normal clock output.

To use the "-f" switch we need to use "/usr/bin/time" instead of the shell built-in time.

{{< highlight bash >}}/usr/bin/time -f "%E" ping bing.com{{< /highlight >}}

**Output:**

As you can see, we now only get a normal clock output showing the operation took 5 seconds.

{{< highlight text >}}
PING bing.com (13.107.21.200) 56(84) bytes of data.
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=1 ttl=113 time=154 ms
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=2 ttl=113 time=147 ms
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=3 ttl=113 time=170 ms
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=4 ttl=113 time=190 ms
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=5 ttl=113 time=169 ms

--- bing.com ping statistics ---
6 packets transmitted, 5 received, 16% packet loss, time 5006ms
rtt min/avg/max/mdev = 147.314/166.390/190.495/14.935 ms
0:05.11
{{< /highlight >}}

**Get a detailed output of the time command:**

If you find that you need more detailed information for the time command output, you can use the "-v" switch as follows:

{{< highlight bash >}}/usr/bin/time -v ping bing.com{{< /highlight >}}

**Output:**

{{< highlight text >}}
PING bing.com (13.107.21.200) 56(84) bytes of data.
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=1 ttl=113 time=195 ms
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=2 ttl=113 time=169 ms
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=3 ttl=113 time=193 ms
64 bytes from 13.107.21.200 (13.107.21.200): icmp_seq=6 ttl=113 time=235 ms

--- bing.com ping statistics ---
7 packets transmitted, 4 received, 42% packet loss, time 6057ms
rtt min/avg/max/mdev = 169.307/198.564/235.162/23.584 ms
	Command being timed: "ping bing.com"
	User time (seconds): 0.00
	System time (seconds): 0.00
	Percent of CPU this job got: 0%
	Elapsed (wall clock) time (h:mm:ss or m:ss): 0:07.74
	Average shared text size (kbytes): 0
	Average unshared data size (kbytes): 0
	Average stack size (kbytes): 0
	Average total size (kbytes): 0
	Maximum resident set size (kbytes): 2924
	Average resident set size (kbytes): 0
	Major (requiring I/O) page faults: 0
	Minor (reclaiming a frame) page faults: 136
	Voluntary context switches: 15
	Involuntary context switches: 0
	Swaps: 0
	File system inputs: 0
	File system outputs: 0
	Socket messages sent: 0
	Socket messages received: 0
	Signals delivered: 0
	Page size (bytes): 4096
	Exit status: 0
{{< /highlight >}}

**Time a bash script:**

<!--adsense-->

If you're running a bash script with plenty of commands and long operations, you can simply time the script as follows:

{{< highlight bash >}}/usr/bin/time -f "%E" ./script.sh{{< /highlight >}}

**Redirect the time output to a file:**

If you ever have the need to log the time into a file, you can use the "-o" switch and point to the file as follows:

{{< highlight bash >}}/usr/bin/time -o /path/to/file.txt ping bing.com{{< /highlight >}}

To append the time log to an already existing file, you can use the "-a" switch as follows:

{{< highlight bash >}}/usr/bin/time -a /path/to/file.txt ping bing.com{{< /highlight >}}

## **Conclusion**

To time a command in linux is easy to use and quite useful. It's excellent for timing those long operations while you are away from your system. The time command has plenty more switches and options which you can view in your terminal by viewing the manual as follows...

{{< highlight bash >}}man time{{< /highlight >}}

That will be all for this quick look at the time command.
