# os-script
Simple branching over scripts in your module's package.json, converting to `npm run foo` to `npm run foo:windows` or `npm run foo:unix` for tasks whose commands differ across Operating System platforms

## Installation
    $ npm install os-script --save-dev

## Usage
Add scripts to your package.json like so:

    "scripts": {
      "foo": "os-script foo",
      "foo:win32": "copy src\file1 dist\file1",
      "foo:darwin": "cp src/file1 dist/file1"
    }
