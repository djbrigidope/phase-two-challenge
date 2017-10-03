# Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth **50 points** in total.

_Reminder: you can use the internet to help you answer these questions :)_

###### When you run a command in the terminal, where does BASH look for that command?
  in ~/bin

###### On a UNIX computer, how do you stop a running process?
-- first find the PID of the process you want to end:

```
ps -e | grep thizz
17146 pts/1    00:00:00 thizz
```

then use `kill` + PID to end the process

###### What packages do you have installed via homebrew?
```sh
# djbrigidope hiafrn ~ [2:09:56]
$ brew list
atk
atkmm
autoconf
automake
bash-completion
bdw-gc
boost
boost-build
cairo
cairomm
cask
colordiff
cowsay
curl
emacs
exercism
ffmpeg
flow
fontconfig
freetype
gdbm
gdk-pixbuf
gettext
git
glib
glibmm
go
gobject-introspection
gsl
gtk+
gtkmm
harfbuzz
hh
hicolor-icon-theme
httpie
hub
icu4c
inkscape
intltool
jpeg
lame
libevent
libffi
libpng
libsigc++
libtiff
libtool
little-cms
little-cms2
mackup
mpg123
nvm
openjpeg
openssl
pango
pangomm
pcre
pixman
pkg-config
poppler
popt
portaudio
postgresql
potrace
python3
readline
shared-mime-info
speedtest_cli
sqlite
the_silver_searcher
tmux
tree
unrar
x264
xvid
xz
zsh

```

###### On a UNIX computer, how do you find the process id of a running process?
```sh
ps -e | grep [process]
  17146 pts/1    00:00:00 thizz
```


###### In a terminal, what does control-c do?
exits current process/program (node REPL)


###### What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```
change dir to steve(through Users).
make directory foo.
create file bar (in steve).
change dir to foo.
create file bar.
print working directory (path of current dir).

###### How do you set an environment variable in your shell?
VARNAME="my value" then call with $VARNAME. or, set in .bash/.zsh file

###### What keyboard shortcut do you use to split the screen in your editor?
ctrl-d

###### How do you create an alias in your shell?
  alias name='command to do thing'
```sh
 alias home='cd ~'
```

###### When a terminal command completes, how can you tell if it was successful or not?
 To know the exit status of last command, run ```echo $?``` You will get the output in integer. If output is ZERO ( 0 ), it means command has been run successfully. Whereas if output of the command is NON ZERO then command was not run successfully.

###### What does your `~/.gitconfig` have in it? (paste the whole file here)

  ```sh
  # djbrigidope hiafrn ~ [11:33:59]
  $ cat .gitconfig
  # This is Git's per-user configuration file.
  [user]
  # Please adapt and uncomment the following lines:
  name = bj bautista
  email = emailme@djbrigidope.com
  ```

###### What is the difference between a relative and absolute path?
 the path that refers to ~ is an absolute path. the path that only refers to the current directory is relative.



######Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```


 ###### And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?

 cp README.md ../pinterest-for-dogs


###### What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

Command - T

###### What files or folders do you want all git repositories to ignore?
things that don't need to be shared. node files, authentication files with keys/passwords in them, DS_Store files.

 ###### What is the main difference between `Array.map` and `Array.forEach` in JavaScript?

 `forEach` operates on every element the original array and performs a function.
 `forEach value in Array A, do X.`

` map` operates on every element in an array but returns a
new array with updated values.

map is better for functional programming, forEach consumes less
memory.

### Requirements

- [ ] __50:__ All questions are answered correctly
