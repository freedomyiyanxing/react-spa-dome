const path = require('path');
const fs = require('fs');
const ip = require('ip');
const express = require('express');
const chalk = require('chalk');

const app = express();

app.use(express.static('dist'));

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');

app.use('*', (req, res) => {
  res.send(template);
});

const ips = 'http://' + ip.address() + ':3333';

app.listen('3333', () => {
  console.log(chalk.cyan('- On your Network: ' + ips + '\n'));
});
