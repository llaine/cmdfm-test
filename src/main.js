'use strict';
require('babel-polyfill');

import Player from 'player';
import App from './app';
const app = new App();

async function main() {

  try {
    var genresRaw = await app.getGenres();
  } catch(error) {
    console.error(error);
  }

  const style = genresRaw[0];

  try {

    var songs = await app.getSongFromGenre(style);
  } catch(error) {
    console.error(error);
  }

  console.log(songs.length, ' genres found !');

  const song = songs[0];

  try {
    var playing = await app.getStreamUrl(song.stream_url);
  } catch(error) {
    console.error(error);
  }

  console.log('Song is going to be played', song);

  var player = new Player(playing);

  player.play(function(err, player) {
    console.log('playend');
  });
}


main();



