#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const readline = require('readline');



async function main() {
  const input = process.argv[2] ? fs.createReadStream(process.argv[2]) : process.input;
  //const log=fs.readFileSync(logFile).toString('utf8');

  const readInterface = readline.createInterface({
    input: input,
    output: process.stdout,
    console: false
  })
  const data = [];
  readInterface.on('line', function (line) {
    data.push(line);
  });

  readInterface.on('close', function (line) {
    console.log(JSON.stringify(data));
  });

}

main().then()
