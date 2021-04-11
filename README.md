# cueplayer
Plays a video on a Corsair keyboard.

Requires some version of Node.js & Electron


Tested on macOS with a K70 keyboard.

YMMV on other keyboards and on Windows.

Linux of course, not supported as there's no official CUE for Linux, and whiel CKB-Next's API is *easy* it isn't *good*.

```
git clone https://github.com/theLMGN/cueplayer
cd cueplayer
npm i

cp ~/myvideo.mp4 ./video.mp4

./node_modules/.bin/electron .
```
