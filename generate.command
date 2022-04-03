#! /usr/bin/ruby -r yaml -r json -r pathname
require "active_support/core_ext/hash"

ARGV.push "#{__dir__}/Dracula.yml" unless ARGF.pos.zero?

theme = YAML.load ARGF.read
theme.deep_transform_values! do |hex|
  hex.prepend "#" if hex.match? /^(\h{3}){1,2}$/
  hex
end

return puts JSON.pretty_generate theme unless STDIN.tty?

json_file = Pathname(ARGF.path).sub_ext ".json"
json_file.write theme.to_json

system "#{__dir__}/json-clr.js", json_file.to_path
json_file.delete
