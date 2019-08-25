---
author: Antonio
date: 2018-11-25 00:34:06+00:00
draft: false
title: How To Reduce Apk Size
type: post
url: /reduce-apk-size/
categories:
- Tutorials
tags:
- android studio
- app development
- Tutorials
---

{{< image src="/images/reduce-apk-size/How-To-Reduce-Apk-Size.png" alt="How To Reduce Apk Size" width="500px" >}}

How to reduce apk size? A question often asked by new app developers when trying to figure out how to best optimize their app. As an app developer you should always optimize your app wherever you can to give your user base the best possible experience with your app. By well optimizing your app you'll give your users a smooth experience throughout your apps' UI along with a smaller foot print.

<!--more-->

There are many ways to optimize your app. In this tutorial I will show you how to reduce apk size with three of the best and easiest methods. Let's get started...

## Shrink Your Code

We will first start by shrinking your code with ProGuard. This removes unused classes, fields, methods, and attributes from your app as well as from code libraries you may have added in your project.

Open your apps' build.gradle file in Android Studio and under "buildTypes/release" add the following line...

{{< highlight groovy >}}minifyEnabled true{{< /highlight >}}

After enabling minifyEnabled your "**buildTypes/release**" should look like this...

{{< highlight groovy "linenos=table" >}}
buildTypes {
  release {
    minifyEnabled true
    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
  }
}
{{< /highlight >}}

You should now build your app and test it to make sure it's working fine. If for some reason you get any build errors after enabling minifyEnabled do not worry, just keep following the tutorial.

## Shrink Your Code Even More

Next we will be shrinking our code at the bytecode level to further reduce apk size and help our app run faster...

In the same build.gradle file under "**buildTypes/release**" replace "**proguard-android.txt**" with "**proguard-android-optimize.txt**". Your "**buildTypes/release**" should now look like this...

{{< highlight groovy "linenos=table" >}}
buildTypes {
  release {
    minifyEnabled true
    proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
  }
}
{{< /highlight >}}

Again build your app and test it to make sure it's working fine. If for some reason you get any build errors after changing the ProGuard do not worry, just keep following the tutorial.

## Shrink Your Resources

In this part of the tutorial we will be shrinking our resources alongside the code shrinking we already did to further reduce apk size. This will remove any unused resources that were a result from the code shrinking we did in the previous parts of this tutorial.

So once again in your build.gradle file under "**buildTypes/release**" add the following line...

{{< highlight groovy >}}shrinkResources true{{< /highlight >}}

Your "**buildTypes/release**" should now look like this...

{{< highlight groovy "linenos=table" >}}
buildTypes {
  release {
    minifyEnabled true
    shrinkResources true
    proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
  }
}
{{< /highlight >}}

Now build your app and test it. If your app builds and runs without issues, then you do not need to continue with this tutorial. However if you're getting build errors then continue reading.

## Fix Errors After Optimizing APK

If you have completed the tutorial up to this point, it's possible that you may be experiencing build errors. This is because the optimizations we have done to reduce apk size can be very aggressive and may have removed code or resources the app actually needs to run properly. In my experience this usually happens with "**adsense**" and "**ShareActionProvider**" code, but don't worry - we will add some proguard rules to fix this.

Lets add some rules in your "**proguard-rules.pro**" file to make sure that any code or resources your app needs are not removed. I have been using these rules in my own apps with much success.

In Android Studio open your apps' proguard-rules.pro file and add the following rules after the last line...

{{< highlight groovy "linenos=table" >}}
-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {
  public static final *** NULL;
}

-keepnames class * implements android.os.Parcelable
-keepclassmembers class * implements android.os.Parcelable {
  public static final *** CREATOR;
}

-keep @interface android.support.annotation.Keep
-keep @android.support.annotation.Keep class *
-keepclasseswithmembers class * {
  @android.support.annotation.Keep ;
}
-keepclasseswithmembers class * {
  @android.support.annotation.Keep ;
}

-keep @interface com.google.android.gms.common.annotation.KeepName
-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * {
  @com.google.android.gms.common.annotation.KeepName *;
}

-keep @interface com.google.android.gms.common.util.DynamiteApi
-keep public @com.google.android.gms.common.util.DynamiteApi class * {
  public ;
  public ;
}

-keep class android.support.v7.widget.ShareActionProvider { *; }

-dontwarn android.security.NetworkSecurityPolicy
{{< /highlight >}}

You can now build your app and test it. After adding the above rules your app should now be building and running fine.

This will conclude the tutorial. You should now be able to reduce your apk size and have a more optimized app to give your app users a better experience with your app.

For more info visit the android developers <a href="https://developer.android.com/studio/build/shrink-code" target="_blank">website</a>.
