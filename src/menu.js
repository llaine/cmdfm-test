'use strict';

/**
 * cmdfm - menu
 * @author llaine
 * @date 20/12/2015
 */

import readline from 'readline';

export default class Menu {
  constructor() {
    this.input = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
  }

  onLine(cb) {
    this.input.on('line', function(line){
      console.log(line);
    })
  }

  prompt() {
    this.input.question('>', (answer) => {
      
    })
  }
}