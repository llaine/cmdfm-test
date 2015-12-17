'use strict';

/**
 * cmdfm - menu
 * @author llaine
 * @date 17/12/2015
 */

import Player from 'player';
import program from 'commander';
import Menu from './main';

const M = new Menu();

program
  .version('0.0.1')
  .usage('cmd.fm cli app');

program
  .command('styles')
  .description('Display all the available style.')
  .action(async () => {
    const genres = await M.getGenres();

    console.log(genres);

  });

program
  .command('play <style>')
  .description('Launch a playlist with a specific musical style')
  .action(async (style) => {
    const songsFromStyle = await M.getSongsFromGenre(style);
    const firstSong = songsFromStyle[0];

    if(firstSong === null) return 0;

    console.log('Fetching the first song ...')
    console.log(firstSong.title)
    console.log('Getting url for the first song')


    try {
      var firstSongUrl = await M.getStreamUrlSync(firstSong.stream_url);
    } catch(error) {
      console.error(error);
    }

    var player = new Player(firstSongUrl);
    console.log('Song url grabbed, now playing ...')

    try {
      player.play();
    } catch (error) {
      console.error(error);
    }

    //
    //for (var i = 0; i < songsFromStyle.length; i++) {
    //  let song = songsFromStyle[i];
    //
    //  M.getStreamUrl(song.stream_url).then(function(url) {
    //    if (url) {
    //      player.add(url);
    //    }
    //  });
    //
    //}
    //
    //
    //player.on('playing', (item) => {
    //  console.log('Playing ... ');
    //  setTimeout(function() {
    //    if(player.list.length > 0) {
    //       player.next();
    //    }
    //  }, 10000)
    //});

  });


program.parse(process.argv);