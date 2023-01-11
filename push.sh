#!/bin/sh
x="$(cat version.txt)"
y="$(echo -e "$x\\n" | python -c "import sys;sys.stdin.write('.'.join(i<2 and s or str(int(s)+1) for i,s in enumerate(input().split('.'))))")"
echo "$y" > version.txt
sed 's/version: "([0-9]{0,3}\.?){1,3}",/version: "'"$y"'",/'

zip -u fullscreen-keybind.zip fullscreen-keybind.js
git add fullscreen-keybind.js fullscreen-keybind.zip version.txt
git commit -m "Update zip to $y"
git push
