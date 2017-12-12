#!/usr/bin/env node

const platform = require('os').platform()
const script = process.argv[process.argv.length - 1]
const spawn = require('child_process').spawn
const child = spawn('npm', ['run', `${script}:${platform}`])

child.stdout.on('data', console.log)
child.stderr.on('data', console.error)
