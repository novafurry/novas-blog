---
title: KDE on a Chromebook with native touch support and wayland
description: Sick of ChromeOS but don't want the danger of bricking?
published: 2024-06-02
tags: [chromebook, hack, kde, linux, crostini]
---
1. Setup and enable the Linux Crostini Container
2. Set your username and storage size, these can be whatever you want. (you can share thru google drive, usbs, and the my files folder later)
3. Install KDE, the Konsole terminal, nano text editor and the Maliit Onscreen Keyboard (this **WILL** take a while)
 Run: `sudo apt-get install plasma-workspace-wayland maliit-keyboard nano konsole -y`
4. (heads up: this needs a keyboard! this is not required) For easy access to KDE,  run `nano ~/.bashrc` in the terminal., use the FN+Down arrow keys to scroll to the bottom and add the line `alias k='startplasma-wayland'` then hit Ctrl+X, then Y then enter, now all you need to enter to start KDE is `k`
5. Run `sudo passwd` and set a password of your choice
7. Once completed, run `startplasma-wayland` in the terminal
8. Enter fullscreen by dragging down from the top middle and pressing full
9. Open KDE Settings and set animation speed to instant
10. scroll down to input devices, navigate to virtual keyboard settings inside of input and pick Maliit.
11.Now feel free to customise to your liking (long press desktop for edit mode)! (video will probably be up on yt within the month about more in-depth customisation)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1NjIxNjE5Nl19
-->