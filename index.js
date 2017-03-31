let platform = require('os').platform();
let script = process.argv[process.argv.length - 1];
let spawn = require('child_process').spawn;
let child = spawn('npm', ['run', `${script}:${platform}`]);

child.stdout.on('data', data => console.log(`${data}`));
child.stderr.on('data', data => console.log(`${data}`));
