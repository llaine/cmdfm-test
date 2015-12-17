'use strict';
require('babel-polyfill');

import Api from './api';

class ApiProxy {
  constructor() {
    this.app = new Api();
  }

  async getGenres() {
    return await this.app.getGenres();
  }

  async getSongsFromGenre(genre) {
    if(genre) {
      return await this.app.getSongFromGenre(genre);
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


