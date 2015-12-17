'use strict';
require('babel-polyfill');

import App from './app';

class Menu {
  constructor() {
    this.app = new App();
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

export default Menu;


