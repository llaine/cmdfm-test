'use strict';

/**
 * cmdfm - player
 * @author llaine
 * @date 18/12/2015
 */


import ApiProxy from './api_proxy';
import NodePlayer from 'player';

class Player {
  constructor() {
    this.api = new ApiProxy();
    this.playlist = [];
    this.player = undefined;
  }

  async displayStyles() {
    const genres = this.api.getGenres();
    console.log(genres);
  }

  async launchPlaylist(style) {
    console.info('Launch playlist', style)
    // Array of streamable Song object.
    const songsArray = await this.api.getSongsFromGenre(style);
    let iter = songsArray[Symbol.iterator]();

    console.info('Getting playlist of ', songsArray.length);

    var songIter = iter.next();

    // Adding all the songs to the playlist
    while(!songIter.done) {
      let song = songIter.value;
      this.playlist.push(song.url());
      songIter = iter.next();
    }

    this.launchPlayer();
  }

  launchPlayer() {
    var self = this;
    console.log('Launching player');

    this.player = new NodePlayer(this.playlist)
      .enable('stream')
      .on('playing', function(song) {
        var player = this;
        console.info('Playing... ');

        setTimeout(() => {
          player.next();
        }, 3000)
      })
      .on('playend', function(song) {
        debug('play done, switching to next one ...')
      })
      .on('error', function(err) {
        console.error(err);
        self.launchPlayer();
      })
      .play();
  }
}


export default Player;