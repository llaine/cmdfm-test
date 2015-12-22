'use strict';

/**
 * cmdfm - player
 * @author llaine
 * @date 18/12/2015
 */
import { Playlist } from './models';
import ApiProxy from './api_proxy';
import NodePlayer from 'player';


class MusicalPlayer extends NodePlayer {
  constructor(opts) {
    super(opts);
    this.enable('stream');
    console.log('Node player created ...')
  }

  onPlay(cb) {
    this.on('playing', cb);
  }
}

class Player {
  constructor() {
    console.log('Player created ...')
    this.api = new ApiProxy();
  }

  getPlayer() {
    return this.player;
  }

  getPlaylist() {
    return this.playlist;
  }

  async displayStyles() {
    const genres = this.api.getGenres();
    console.log(genres);
  }

  async launchPlaylist(style) {
    this.playlist = await this.api.getSongsFromGenre(style);

    console.log('Playlist created ...');

    var playlist = this.playlist.playablePlaylist();

    console.log('Playlist url created ...');

    this.player = new MusicalPlayer(playlist);

    this.player.play();

    this.songName();

    console.log('Player launched ...')
  }

  nextSong() {
    try {
      this.player.next();
    } catch(error) {
      console.log(error);
    }
  }

  songName() {
    try {
      this.player.on('playing', (song) => {
        console.log('Now playing ...');
        console.log(this.playlist.getSongInfos(song.src));
      });
    } catch(error) {
      console.error(error);
    }
  }
}


export default Player;