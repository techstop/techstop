---
author: Antonio
date: 2018-01-23 23:52:15+00:00
draft: false
title: LG G Stylo Katana ROM
type: post
url: /lg-g-stylo-katana-rom/
description: "Katana is a custom rom for the LG G Stylo MS631 and H631. The rom has been styled and enhanced to improve the performance and overall user experience."
googleAdsenseVerify: false
categories:
- Android
tags:
- LG
- MS631
- H631
- Android
- roms
- phones
---

{{< image src="/images/stylo/LG G Stylo Katana ROM-0.png" alt="LG G Stylo Katana ROM" width="100px" >}}
{{< image src="/images/stylo/LG G Stylo Katana ROM-1.png" alt="LG G Stylo Katana ROM" width="100px" >}}
{{< image src="/images/stylo/LG G Stylo Katana ROM-2.png" alt="LG G Stylo Katana ROM" width="100px" >}}

The LG G Stylo Katana ROM is based on the 5.1.1 v10J firmware for the MetroPCS and T-Mobile LG G Stylo. Katana brings many UI and performance enhancements beyond the stock factory rom from LG, thus improving the user experience. The rom is lightweight and operates smoothly. Katana also comes with a nice theme that was tastefully done. Full details below...

<!--more-->

**Katana ROM Features:**

- ​Deodexed - zipaligned - busybox - rooted
- Barebones debloated (Get Gapps from play store & LG bloat apps from my deodexed flashable bloat zips)
- Replaced part of settings LG skin with stock android
- Settings font changed from black to dark grey and sharpened.
- Replaced most of LG teal blue with Katana blue
- Removed carrier text from lockscreen & notification dropdown
- QuickSettings flashlight mod
- Recovery & SuperSU menu shortcut mod
- Stock android battery with percentage
- Cyanogenmod AudioFX or Dolby Atmos EQs
- SD fix
- Manual camera mod
- Screen density (304)
- Support for all apps in split window
- Disabled headset loud volume warning
- TCP tweak
- ​Katana boot animation
- Xposed framework
- Icons used: <a href="https://play.google.com/store/apps/details?id=com.thearclabs.polycon" target="_blank">Polycon</a> & <a href="https://play.google.com/store/apps/details?id=com.zavukodlak.candycons" target="_blank">Candycons</a>
- Weather widget used: <a href="https://play.google.com/store/apps/details?id=com.dvtonder.chronus" target="_blank">Chronus</a>

**Katana Kernel Features:**

- ​​Built from source code with linaro optimized toolchain
- GPU overclocked to 450 mhz (for improved gaming performance)
- CPU undervolt on lower frequencies (for saving battery when idle or screen off)
- Added HyperX governor and set to default (very fast)
- Conservative governor (for battery saving)
- Added SIO and FIOPS schedulers
- Lowered transition latency for Ondemand governor from 10mil to 9mil (for smoothness)
- Running kernel mode NEON
- -O2 optimized (might go -O3 on next update)
- New logger interface "/sys/kernel/logger_mode" (0 = disable & 1 = enabled) 0 is default. Ask on forum how to use.
- cflags optimizations (-mtune=cortex-a53 -mfpu=neon-vfpv4 -fgraphite -mfloat-abi=hard) and many more.
- noatime for reduced overhead
- SE linux permissive
- Disabled LG Root Check Tool
- init.d support (for running custom scripts)
- Insecured (root shell)
- Read Over Write(row) sheduling as default (for ui smoothness)

**Instructions:**

1. ​Go into twrp and do a backup.
2. In twrp choose "Wipe > Factory reset". Do not skip this!
3. Now choose Install and flash the Katana rom zip.
4. While still in twrp flash the MetroPCS or T-Mobile partitions from <a href="https://www.androidfilehost.com/?w=files&flid=43660" target="_blank">HERE</a>.
5. After flashing both, reboot and enjoy!
6. First boot-up takes about 5 minutes, so be patient.

{{< cta-button "Katana ROM" "https://www.androidfilehost.com/?fid=24269982086998002" "_blank" >}}

**Optional Flashable Extras:**

- <a href="https://www.androidfilehost.com/?w=files&flid=43661" target="_blank">LG Deodexed Bloat Apps</a>
- <a href="https://www.androidfilehost.com/?w=files&flid=43662" target="_blank">Equalizers</a> - only flash one of these
- <a href="https://www.androidfilehost.com/?w=files&flid=43851" target="_blank">Fonts</a>
- <a href="http://androidforums.com/threads/rom-metropcs-t-mobile-katana-rom-updated-11-16-2015.960512/page-4#post-7149212" target="_blank">Custom Katana bootanimation</a> - by DrakenFX @ Android Forums
