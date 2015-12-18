'use strict';

import Api from './api';
import Song from './models';


class ApiProxy {
  constructor() {
    this.app = new Api();
  }

  async getGenres() {
    return await this.app.getGenres();
  }

  async getSongsFromGenre(genre) {
    if(genre) {
      var songArray = await this.app.getSongFromGenre(genre);
      return songArray.map((song) => {
        if(song.is_streamable || song !== undefined) {
          return new Song(
              song.title,
              song.description,
              song.stream_url,
              song.duration,
              song.genre_id)
        }
      })
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


