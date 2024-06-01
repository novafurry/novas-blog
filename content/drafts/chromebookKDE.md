# KDE on a Chromebook with native touch support and wayland
1. Setup and enable the Linux Crostini Container
2. Set your username and storage size, these can be whatever you want. (you can share thru google drive, usbs, and the my files folder later)
3. Install KDE, the Konsole terminal, nano text editor and the Maliit Onscreen Keyboard (this **WILL** take a while)
	Run: `sudo apt-get install plasma-workspace-wayland maliit-keyboard nano konsole -y`
4. Once completed, run `startplasma-wayland` in the terminal 
5. Enter fullscreen by dragging down from the top middle and pressing full
6. Open KDE Settings and set animation speed to instant
7. scroll down to input devices, navigate to virtual keyboard settings inside of input and pick Maliit.
8. (heads up: this needs a keyboard!) For easy access to KDE, open a terminal (konsole)  and run `nano ~/.bashrc`, use the FN+Down arrow keys to scroll to the bottom and add the line `alias k='startplasma-wayland'`, now all you need to enter to start KDE is `k`
9. Once in KDE, long press (or right click> enter edit mode) the desktop and press the new icon in the bottom right hand corner 
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjgyMjk0OTY2LC03ODM5NDk2NzEsLTE0Nz
EzNDc3MzFdfQ==
-->