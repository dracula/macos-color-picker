#! /usr/bin/env brew ruby
system "brew tap dracula/install --quiet"
$LOAD_PATH.unshift *Tap.cmd_directories
require "dracula-yaml-json"

Homebrew.dracula_yaml_json do |theme|
  spec = theme[:spec].except :blue, :magenta, :bright_black
  theme.delete :name
  theme.merge! spec.transform_keys(&:titlecase)
  next theme
end

exec "#{__dir__}/json-clr.* *.clr"
