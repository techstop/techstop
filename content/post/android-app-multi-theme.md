---
author: Antonio
title: "Android App Multi Theme"
date: 2022-02-28T21:17:47-04:00
draft: false
type: post
url: /android-app-multi-theme/
description: "In this tutorial we will cover how to add multi theme support to your android app. By adding multi theme support to your android app you can provide a better user experience and increase app installations."
categories:
- Android
tags:
- android studio
- app development
- java
- Tutorials
- Android
---

{{< image src="/images/app-themes/app-themes-1.png" alt="App Themes" width="150px" >}}
{{< image src="/images/app-themes/app-themes-2.png" alt="App Themes" width="150px" >}}
{{< image src="/images/app-themes/app-themes-3.png" alt="App Themes" width="150px" >}}

If you would like to add some flare to your android app by adding multi theme support, then you've come to the right place. Adding multi theme support to your android app can be very beneficial. For starters, your users will never get bored of just having a single color and this also provides a better user experience and can increase app installations. This can be the difference between users installing your app or the competition's app.

<!--more-->

Lets get started with this tutorial to learn how to add multi theme support to your android app. I will be showing you how to change the app colors and background.

The code in this tutorial will be in the full project on github linked at the bottom of this page. Feel free to fork or download the project from github.

## **Android App Multi Themes**

Begin by creating a new project in Android Studio with an Empty Activity if you haven’t already. We can call the project “**App Themes**”.

First we will create our color themes in our **values** directory. If you're on an older version of Android Studio then place the following code into your **styles.xml** file. The newer Android Studio version uses a **themes.xml** file instead, so place the code in that file.

<!--adsense-->

**themes.xml**
{{< highlight xml >}}
<resources xmlns:tools="http://schemas.android.com/tools">
    <style name="BlueTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#1565C0</item>
        <item name="colorPrimaryDark">#1256a4</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="RedTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#c11111</item>
        <item name="colorPrimaryDark">#B10E0E</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="BlackTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#000000</item>
        <item name="colorPrimaryDark">#000000</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">#434343</item>
        <item name="colorControlHighlight">#222222</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="YellowTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#edb200</item>
        <item name="colorPrimaryDark">#dca400</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="OrangeTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#FF5722</item>
        <item name="colorPrimaryDark">#E64A19</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="PinkTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#E91E63</item>
        <item name="colorPrimaryDark">#D81B60</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="PurpleTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#9C27B0</item>
        <item name="colorPrimaryDark">#8E24AA</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="GreenTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#4CAF50</item>
        <item name="colorPrimaryDark">#43A047</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>

    <style name="GreyTheme" parent="Theme.AppCompat">
        <item name="colorPrimary">#9E9E9E</item>
        <item name="colorPrimaryDark">#8b8b8b</item>
        <item name="colorAccent">?attr/colorPrimary</item>
        <item name="colorButtonNormal">?attr/colorPrimary</item>
        <item name="colorControlHighlight">#40000000</item>
        <item name="android:statusBarColor" tools:targetApi="21">?attr/colorPrimary</item>
        <item name="android:navigationBarColor" tools:targetApi="21">?attr/colorPrimary</item>
    </style>
</resources>
{{< /highlight >}}

Copy the following into your **strings.xml** file. We will need these strings for our layouts.

**strings.xml**
{{< highlight xml >}}
<resources>
    <string name="app_name">App Themes</string>
    <string name="hello_world">Hello World!</string>
    <string name="blue_theme">BLUE</string>
    <string name="red_theme">RED</string>
    <string name="my_themes">Themes</string>
    <string name="action_my_themes">THEMES</string>
    <string name="black_theme">BLACK</string>
    <string name="yellow_theme">YELLOW</string>
    <string name="orange_theme">ORANGE</string>
    <string name="pink_theme">PINK</string>
    <string name="purple_theme">PURPLE</string>
    <string name="green_theme">GREEN</string>
    <string name="grey_theme">GREY</string>
    <string name="dark_bg">DARK</string>
    <string name="choose_a_background">BACKGROUNDS</string>
    <string name="choose_a_color">COLORS</string>
    <string name="white_bg">WHITE</string>
</resources>
{{< /highlight >}}

We can now create our layout for the activity where we'll be selecting our themes. You can call it **activity_themes.xml**.

**activity_themes.xml**
{{< highlight xml >}}
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_margin="20dp"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:scrollbars="none"
    android:id="@+id/activityThemes" >

    <LinearLayout
        android:orientation="vertical"
        android:gravity="center"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <TextView
            android:id="@+id/colorsTextView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/choose_a_color"
            android:textSize="22sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="3dp"
            android:background="?attr/colorButtonNormal" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/blue_theme"
            android:id="@+id/blueTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/red_theme"
            android:id="@+id/redTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/black_theme"
            android:id="@+id/blackTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/yellow_theme"
            android:id="@+id/yellowTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/orange_theme"
            android:id="@+id/orangeTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/pink_theme"
            android:id="@+id/pinkTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/purple_theme"
            android:id="@+id/purpleTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/green_theme"
            android:id="@+id/greenTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/grey_theme"
            android:id="@+id/greyTheme"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:id="@+id/bgTextView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/choose_a_background"
            android:textSize="22sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="3dp"
            android:background="?attr/colorButtonNormal" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/dark_bg"
            android:id="@+id/darkBG"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/grey_theme"
            android:id="@+id/greyBG"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/black_theme"
            android:id="@+id/blackBG"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

        <View
            android:layout_marginStart="8dp"
            android:layout_marginEnd="8dp"
            android:layout_width="match_parent"
            android:layout_height="1dp"
            android:background="#4a4a4a" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textStyle="bold"
            android:text="@string/white_bg"
            android:id="@+id/whiteBG"
            android:background="?android:attr/selectableItemBackground"
            android:textSize="16sp" />

    </LinearLayout>

</ScrollView>
{{< /highlight >}}

Now we need to make sure that our main layout has ids set for the constraint layout and textview and has text color set to white.

**activity_main.xml**
{{< highlight xml >}}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/myView"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="30sp"
        android:text="@string/hello_world"
        android:textColor="#FFFFFF"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
{{< /highlight >}}

Since we are going to be accessing our theme chooser layout from a menu item as shown in the screenshot at the top of this article, lets create our menu item. Create a new directory called **menu** within the **res** directory. Inside the **menu** directory create a new file called **menu_main.xml** and add the following code.

**menu_main.xml**
{{< highlight xml >}}
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    tools:context=".MainActivity">

    <item
        android:id="@+id/myThemes"
        android:title="@string/action_my_themes"
        app:showAsAction="never" />
</menu>
{{< /highlight >}}

Now that we've created all our xml files, we can now start with our java code.

Create a new java class and call it **Themes**. The Themes class will hold all our themes and SharedPreferences so that we can select and save themes so they are applied automatically each time the app is opened. Since this is a utility class it will not have a layout and does not need to be declared in the AndroidManifest.

<!--adsense-->

Add the following code to the **Themes** class.

Notice that the **getTheme** and **getBG** methods at the bottom of the class have the blue theme(1) and dark background(0) set as default. These would be the default colors the app opens to for the first time.

**Themes.java**
{{< highlight java >}}
package com.gt.appthemes;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.view.View;
import android.widget.TextView;

public class Themes extends MainActivity {

    // SelectTheme
    static void redTheme(Context context) {
        setTheme("Color", 0, context);
    }

    static void blueTheme(Context context) {
        setTheme("Color", 1, context);
    }

    static void blackTheme(Context context) {
        setTheme("Color", 2, context);
    }

    static void yellowTheme(Context context) {
        setTheme("Color", 3, context);
    }

    static void orangeTheme(Context context) {
        setTheme("Color", 4, context);
    }

    static void pinkTheme(Context context) {
        setTheme("Color", 5, context);
    }

    static void purpleTheme(Context context) {
        setTheme("Color", 6, context);
    }

    static void greenTheme(Context context) {
        setTheme("Color", 7, context);
    }

    static void greyTheme(Context context) {
        setTheme("Color", 8, context);
    }

    // Backgrounds
    static void darkBG(Context context) {
        setTheme("BG", 0, context);
    }

    static void greyBG(Context context) {
        setTheme("BG", 1, context);
    }

    static void blackBG(Context context) {
        setTheme("BG", 2, context);
    }

    static void whiteBG(Context context) {
        setTheme("BG", 3, context);
    }

    static void Color(Context context) {
        int theme = getTheme("Color", context);
        switch (theme) {
            case 0:
                context.setTheme(R.style.RedTheme);
                break;
            case 1:
                context.setTheme(R.style.BlueTheme);
                break;
            case 2:
                context.setTheme(R.style.BlackTheme);
                break;
            case 3:
                context.setTheme(R.style.YellowTheme);
                break;
            case 4:
                context.setTheme(R.style.OrangeTheme);
                break;
            case 5:
                context.setTheme(R.style.PinkTheme);
                break;
            case 6:
                context.setTheme(R.style.PurpleTheme);
                break;
            case 7:
                context.setTheme(R.style.GreenTheme);
                break;
            case 8:
                context.setTheme(R.style.GreyTheme);
                break;
        }
    }

    static void textColor(Context context, TextView tv) {
        int bg = getBG("BG", context);
        if (bg == 3) {
            tv.setTextColor(Color.parseColor("#000000"));
        }
    }

    static void BG(Context context, View v) {
        int bg = getBG("BG", context);
        View view = v.getRootView();
        switch (bg) {
            case 0:
                view.setBackgroundColor(Color.parseColor("#303030"));
                break;
            case 1:
                view.setBackgroundColor(Color.parseColor("#757575"));
                break;
            case 2:
                view.setBackgroundColor(Color.parseColor("#000000"));
                break;
            case 3:
                view.setBackgroundColor(Color.parseColor("#EEEEEE"));
                break;
        }
    }

    public static void setTheme(String key, int value, Context context) {
        SharedPreferences preferences = context.getSharedPreferences("preferences", MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putInt(key, value);
        editor.apply();
    }

    public static int getTheme(String key, Context context) {
        SharedPreferences preferences = context.getSharedPreferences("preferences", MODE_PRIVATE);
        return preferences.getInt(key, 1);
    }

    public static int getBG(String key, Context context) {
        SharedPreferences preferences = context.getSharedPreferences("preferences", MODE_PRIVATE);
        return preferences.getInt(key, 0);
    }

}
{{< /highlight >}}

Next we'll create another class called **SelectTheme**. This is the class that will open when we click on the menu item to allow us to choose a theme and background. Our clickable textviews that select our themes will be in this class.

Notice at the bottom of the class we have the **recreateActivity** method which will recreate our **SelectTheme** activity to apply the theme changes immediately.

**SelectTheme.java**
{{< highlight java >}}
package com.gt.appthemes;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SelectTheme extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Themes.Color(this);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_themes);
        Themes.BG(this, findViewById(R.id.activityThemes));

        // TextView theme buttons
        TextView tv0 = findViewById(R.id.blueTheme);
        tv0.setOnClickListener(v -> blueTheme());
        Themes.textColor(this, tv0);

        TextView tv1 = findViewById(R.id.redTheme);
        tv1.setOnClickListener(v -> redTheme());
        Themes.textColor(this, tv1);

        TextView tv2 = findViewById(R.id.blackTheme);
        tv2.setOnClickListener(v -> blackTheme());
        Themes.textColor(this, tv2);

        TextView tv3 = findViewById(R.id.yellowTheme);
        tv3.setOnClickListener(v -> yellowTheme());
        Themes.textColor(this, tv3);

        TextView tv4 = findViewById(R.id.orangeTheme);
        tv4.setOnClickListener(v -> orangeTheme());
        Themes.textColor(this, tv4);

        TextView tv5 = findViewById(R.id.pinkTheme);
        tv5.setOnClickListener(v -> pinkTheme());
        Themes.textColor(this, tv5);

        TextView tv6 = findViewById(R.id.purpleTheme);
        tv6.setOnClickListener(v -> purpleTheme());
        Themes.textColor(this, tv6);

        TextView tv7 = findViewById(R.id.greenTheme);
        tv7.setOnClickListener(v -> greenTheme());
        Themes.textColor(this, tv7);

        TextView tv8 = findViewById(R.id.greyTheme);
        tv8.setOnClickListener(v -> greyTheme());
        Themes.textColor(this, tv8);

        TextView tv9 = findViewById(R.id.darkBG);
        tv9.setOnClickListener(v -> darkBG());
        Themes.textColor(this, tv9);

        TextView tv10 = findViewById(R.id.greyBG);
        tv10.setOnClickListener(v -> greyBG());
        Themes.textColor(this, tv10);

        TextView tv11 = findViewById(R.id.blackBG);
        tv11.setOnClickListener(v -> blackBG());
        Themes.textColor(this, tv11);

        TextView tv12 = findViewById(R.id.whiteBG);
        tv12.setOnClickListener(v -> whiteBG());
        Themes.textColor(this, tv12);

        Themes.textColor(this, findViewById(R.id.colorsTextView));
        Themes.textColor(this, findViewById(R.id.bgTextView));
    }

    public void redTheme() {
        Themes.redTheme(this);
        recreateActivity();
    }

    public void blueTheme() {
        Themes.blueTheme(this);
        recreateActivity();
    }

    public void blackTheme() {
        Themes.blackTheme(this);
        recreateActivity();
    }

    public void yellowTheme() {
        Themes.yellowTheme(this);
        recreateActivity();
    }

    public void orangeTheme() {
        Themes.orangeTheme(this);
        recreateActivity();
    }

    public void pinkTheme() {
        Themes.pinkTheme(this);
        recreateActivity();
    }

    public void purpleTheme() {
        Themes.purpleTheme(this);
        recreateActivity();
    }

    public void greenTheme() {
        Themes.greenTheme(this);
        recreateActivity();
    }

    public void greyTheme() {
        Themes.greyTheme(this);
        recreateActivity();
    }

    public void darkBG() {
        Themes.darkBG(this);
        recreateActivity();
    }

    public void greyBG() {
        Themes.greyBG(this);
        recreateActivity();
    }

    public void blackBG() {
        Themes.blackBG(this);
        recreateActivity();
    }

    public void whiteBG() {
        Themes.whiteBG(this);
        recreateActivity();
    }

    private void recreateActivity() {
        Intent intent = getIntent();
        finish();
        startActivity(intent);
        overridePendingTransition(0, 0);
    }
}
{{< /highlight >}}

Now we need to declare the **SelectTheme.java** class in our **AndroidManifest.xml**. While we're there we can also set the fallback theme to **Theme.AppCompat**.

**AndroidManifest.xml**
{{< highlight xml >}}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.gt.appthemes">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.AppCompat">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity
            android:name=".SelectTheme"
            android:label="@string/my_themes" >
        </activity>
    </application>

</manifest>
{{< /highlight >}}

We can finally setup our **MainActivity** class. Here we'll add our menu to open our **SelectTheme** class and we'll also set the user selected colors for the app to open with each time.

Notice at the bottom of the class we have the **onRestart** method which will recreate our MainActivity to apply the theme changes immediately.

**MainActivity.java**
{{< highlight java >}}
package com.gt.appthemes;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Themes.Color(this);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Themes.BG(this, findViewById(R.id.myView));
        Themes.textColor(this, findViewById(R.id.textView));
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int itemId = item.getItemId();
        if (itemId == R.id.myThemes) {
            Intent intent = new Intent(this, SelectTheme.class);
            startActivity(intent);
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onRestart() {
        super.onRestart();
        recreate();
    }
}
{{< /highlight >}}

This will conclude the Android Multi Theme App tutorial. The full project is on github. You can download or fork it from the link below and import it to your favorite IDE. Android Studio is recommended.

{{< cta-button "Android App Themes" "https://github.com/GameTheory-/android-app-themes" "_blank" >}}
