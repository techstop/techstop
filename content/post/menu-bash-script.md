---
author: Antonio
title: "Create a Menu in a Bash Script"
date: 2019-10-02T20:46:44-04:00
draft: false
type: post
url: /menu-bash-script/
description: "Learn how to create a menu in a bash script. Follow this tutorial to learn how to create menus that will add more versatility and a better user experience for your bash scripts."
categories:
- tutorials
- linux
tags:
- tutorials
- linux
---

{{< image src="/images/linux/menu.png" alt="Create a Menu in Bash Script" width="150px" >}}

Creating a menu in a bash script can be quite useful and at times necessary. A bash menu can allow you to provide options for user input. Upon user selection of an option in your menu, you can run a command or sequence of commands and display outputs.

<!--more-->

There are a few ways to create menus in a bash script. For this tutorial we will be creating a somewhat advanced menu that is quite flexible and easy to understand. We will be using bash functions, so it's a good idea to get familiar with functions. You can read about functions in one of my tutorials found <a href="https://techstop.github.io/bash-functions/">here</a>.

<!--adsense-->

## **Creating a Bash Script Menu**

You will need to place your menu at the bottom of your script since we will be calling functions from the menu and functions need to be placed at the top. Code that makes calls to functions needs to be below the functions.

Taking a look at the following example script you can see that all code is in functions except the menu code.

{{< highlight bash >}}
#!/bin/bash

menu_option_one() {
  echo "Hello John!!!"
}

menu_option_two() {
  echo "Some super cool code by John."
}

press_enter() {
  echo ""
  echo -n "	Press Enter to continue "
  read
  clear
}

incorrect_selection() {
  echo "Incorrect selection! Try again."
}

until [ "$selection" = "0" ]; do
  clear
  echo ""
  echo "    	1  -  Menu Option 1"
  echo "    	2  -  Menu Option 2"
  echo "    	0  -  Exit"
  echo ""
  echo -n "  Enter selection: "
  read selection
  echo ""
  case $selection in
    1 ) clear ; menu_option_one ; press_enter ;;
    2 ) clear ; menu_option_two ; press_enter ;;
    0 ) clear ; exit ;;
    * ) clear ; incorrect_selection ; press_enter ;;
  esac
done
{{< /highlight >}}

Create a file called "**file.sh**" and copy the code above to it and give it execute permissions then run it in a terminal. Try all the menu options to give yourself a better understanding before you continue with this tutorial.

Now lets break things down a bit to learn what's going on in this script.

The menu is a loop that repeats itself until the selection is zero "0". Since the menu is not in a function, it will load as soon as you run the script.

{{< highlight bash >}}until [ "$selection" = "0" ]; do{{< /highlight >}}

Looking at the following line, you'll notice an echo command prompting the user to enter a selection. The "-n" flag for this echo command keeps the cursor on the same line rather then on the next.

{{< highlight bash >}}echo -n "  Enter selection: "{{< /highlight >}}

Once the user enters the selection, the read command passes the selection to the case statement.

{{< highlight bash >}}read selection{{< /highlight >}}

Now if you look at the case statement, each option starts with the clear command. This clears the screen and removes the input line to make the script appear more like a GUI.

{{< highlight bash >}}
case $selection in
  1 ) clear ; menu_option_one ; press_enter ;;
  2 ) clear ; menu_option_two ; press_enter ;;
  0 ) clear ; exit ;;
  * ) clear ; incorrect_selection ; press_enter ;;
esac
{{< /highlight >}}

Also notice how each command in the case statement is separated by semicolons ";". The second command is a call to a function.

<!--adsense-->

The press_enter function prompts the user so they can continue when ready. This will give the user all the time they need to read any output.

Now the final option in the case statement is just in case the user enters a selection that does not exist. Since it's the final option, it is defined by an asterisk "*".

## **Conclusion**

You have now created a bash script menu. This should expand the versatility and user experience of your scripts and add a little aesthetics for the user. You can also call a submenu from your main menu by placing your submenu in a function.

That's all. Hope you enjoyed the tutorial. Feel free to comment below.
