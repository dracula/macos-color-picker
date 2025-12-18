#! /bin/zsh --no-rcs --err-exit
brew tap dracula/install --quiet
brew dracula-yaml-json --exclude blue,magenta,bright_black --case title
./json-clr.* *.clr
