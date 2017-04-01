# os-script
Simple branching over scripts in your module's package.json, converting to `npm run foo` to `npm run foo:win32` or `npm run foo:darwin` for tasks whose commands differ across Operating System platforms

## Installation
    $ npm install os-script --save-dev

## Usage
Add scripts to your package.json like so:

    "scripts": {
      "foo": "os-script foo",
      "foo:win32": "copy src\file1 dist\file1",
      "foo:darwin": "cp src/file1 dist/file1"
    }

And invoke via `npm run foo`

## Todo
* Tests
* Pass through commands
* :default script suffix
