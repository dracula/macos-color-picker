### Color Picker

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo and running the `generate.command`:

    git clone https://github.com/dracula/macos-color-picker.git
    cd macos-color-picker
    ./generate.command

#### Install manually

1. Download using the [GitHub .zip download](https://github.com/dracula/macos-color-picker/archive/master.zip) option and unzip them.
2. Run the `generate.command` to generate the `Dracula.clr` theme.

#### Install using [Homebrew](https://brew.sh)

Easily install from [dracula/homebrew-install](https://github.com/dracula/homebrew-install/blob/master/Casks/dracula-macos-color-picker.rb):

``` sh
brew tap dracula/install
brew install --cask dracula-macos-color-picker
```

#### Activating theme

1. Run the `generate.command` to generate the `Dracula.clr` if you haven't already.
2. Open the macOS native Color Picker
3. Then inside the app, choose `Open…` from the drop-down menu
4. Import the `Dracula.clr` file there
