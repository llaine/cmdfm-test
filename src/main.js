'use strict';
require('babel-polyfill');


/**
 * cmdfm - menu
 * @author llaine
 * @date 17/12/2015
 */

import program from 'commander';
import Player from './player';
import Menu from './menu';
let menu = new Menu();
let jukebox = new Player();

program
  .version('0.0.1')
  .usage('cmd.fm cli app');

program
  .command('styles')
  .description('Display all the available style.')
  .action(() => {
    jukebox.displayStyles();
  });

program
  .command('play <style>')
  .description('Launch a playlist with a specific musical style')
  .action((style) => {
    menu.onLine();
    //jukebox.launchPlaylist(style);
  });


program.parse(process.argv);