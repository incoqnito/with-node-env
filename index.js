#!/usr/bin/env node

const node_env = process.argv[2]
const command = process.argv[3]
const args = process.argv.slice(4)
const { spawn } = require('child_process')

const child = spawn(command, args, {
  env: {
    ...process.env,
    'NODE_ENV': node_env
  },
  argv0: process.argv[0]
})

child.stdout.on('data', (buffer) => console.log(buffer.toString('utf8')))
child.stderr.on('data', (buffer) => console.error(buffer.toString('utf8')))
