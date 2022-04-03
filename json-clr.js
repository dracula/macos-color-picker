#! /usr/bin/osascript -l JavaScript
ObjC.import('AppKit')
ObjC.import('Foundation')

const argf = args => {
  const input = args ? 'ContentsOfFile' : 'DataEncoding'
  args ||= [
    $.NSFileHandle.fileHandleWithStandardInput.availableData,
    $.NSUTF8StringEncoding
  ]
  return $.NSString.alloc[`initWith${input}`](...[args].flat()).js.trim()
}

const hex_rgba = hex => {
  const convert = pos => parseInt(hex.slice(pos, pos + 2), 16) / 255

  if (hex.charAt(0) === '#') hex = hex.slice(1)

  switch (hex.length) {
    case 3:
    case 4:
      hex = hex.split('').reduce((hex, color) => hex + color + color, '')
    case 6:
    case 8:
      hex += 'FF'
      return {
        r: convert(0),
        g: convert(2),
        b: convert(4),
        a: convert(6)
      }
    default: return { r: 0, g: 0, b: 0, a: 0 }
  }
}

run = ([json_file]) => {
  const json = JSON.parse(argf(json_file))
  const [name] = json_file ? json_file.split(/[/.]/).slice(-2) : Object.keys(json)

  const NSColorList = $.NSColorList.alloc.initWithName(name)

  let i = 0
  Object.keys(json).forEach(name => {
    const {r,g,b,a} = hex_rgba(json[name])
    const NScolor = $.NSColor.colorWithCalibratedRedGreenBlueAlpha(r,g,b,a)

    NSColorList.insertColorKeyAtIndex(NScolor, name, i)
    i++
  })
  NSColorList.writeToFile(`${name}.clr`)
}
