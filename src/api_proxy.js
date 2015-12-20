'use strict';

import Api from './api';
import { Song, Playlist } from './models';


class ApiProxy {
  constructor() {
    this.app = new Api();
  }

  async getGenres() {
    return await this.app.getGenres();
  }

  async getSongsFromGenre(genre) {
    if(genre) {
      const library = new Playlist();
      var songArray = await this.app.getSongFromGenre(genre);
      songArray.map((song) => {
        library.set(new Song(song.title, song.description,
                song.stream_url, song.duration, song.genre_id))
      });

      return library;
    }
  }

  async getStreamUrlSync(song) {
    return await this.app.getStreamUrl(song);
  }

  getStreamUrl(song) {
    return this.app.getStreamUrl(song);
  }
}

export default ApiProxy;


