'use strict';

/**
 * cmdfm - menu
 * @author llaine
 * @date 20/12/2015
 */

import readline from 'readline';
import Player from './player';
import events from 'events';
const eventEmitter = new events.EventEmitter();


export default class Menu {
  constructor() {
    console.log('Menu created');
  }

  initialize() {
    this.player = new Player();

    this.input = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.input.setPrompt('CMDFM> ');
    this.input.prompt();
    this.onClose();
    this.onLine();
  }

  onClose() {
    this.input.on('close', function() {
      console.log('Have a great day!');
      process.exit(0);
    });

  }

  displayPrompt() {
    // Relance le prompt
    this.input.prompt();
  }

  /**
   * For each line which has been writen
   */
  onLine() {
    this.input.on('line', (argv) => {
      switch (argv) {
        case 'exit':
          this.input.close();
          break;
        case 'next':
          this.player.nextSong();
          break;
        default:
          const style = argv.trim().split(' ')[1];
          if(style) {
            this.player.launchPlaylist(style);
          }
          break;
      }
      this.displayPrompt();
    });
  }
}