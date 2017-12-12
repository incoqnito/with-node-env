# os-script
Operating system-specific npm scripts!

Simple branching over scripts in your module's package.json, converting `npm run foo` to `npm run foo:win32` or `npm run foo:darwin` depending on the current OS type

## Installation
    $ npm i --save-dev https://github.com/incoqnitogmbh/os-script

## Usage
Add scripts to your package.json like this:

    "scripts": {
      "foo": "os-script foo",
      "foo:win32": "copy src\file1 dist\file1",
      "foo:darwin": "cp src/file1 dist/file1"
    }

And invoke via `npm run foo`

## v1.0.0 Todo
* Tests
