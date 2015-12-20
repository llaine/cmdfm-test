'use strict';

/**
 * cmdfm - player
 * @author llaine
 * @date 18/12/2015
 */
import { Playlist } from './models';
import ApiProxy from './api_proxy';
import Api from './api';
import NodePlayer from 'player';

class MusicalPlayer extends NodePlayer {
  constructor(opts) {
    super(opts);
    this.enable('stream');
  }
}

class Player {
  constructor() {
    this.api = new ApiProxy();
  }

  async displayStyles() {
    const genres = this.api.getGenres();
    console.log(genres);
  }

  async launchPlaylist(style) {
    this.playlist = await this.api.getSongsFromGenre(style);
    var playlist = this.playlist.playablePlaylist();

    this.player = new MusicalPlayer(playlist);

    this.player.play();

    this.shuffle();
  }

  shuffle() {
    this.player.on('playing', (song) => {
      console.log(this.playlist.getSong(song.src));
      setTimeout(()=>{
        this.player.next();
      }, 3000);
    });
  }
}


export default Player;