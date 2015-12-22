'use strict';
require('babel-polyfill');


/**
 * cmdfm - menu
 * @author llaine
 * @date 17/12/2015
 */

import program from 'commander';
import Menu from './menu';

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
    jukebox.launchPlaylist(style);
  });

program
    .command('jukebox')
    .description('Launch the jukebox')
    .action(() => {
      const menu = new Menu();
      menu.initialize();
    });


program.parse(process.argv);