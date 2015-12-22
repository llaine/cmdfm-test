'use strict';

/**
 * cmdfm - models
 * @author llaine
 * @date 18/12/2015
 */
class Song {
  constructor(title, description, streamUrl, duration, genreId) {
    this.title = title;
    this.descr = description;
    this.streamUrl = streamUrl;
    this.duration = duration;
    this.genreId = genreId;
  }

  toString() {
    return `${this.title}, ${this.descr}, ${this.streamUrl}, ${this.duration}, ${this.genreId}`
  }

  url() {
    return this.streamUrl + '?client_id=26fb3c513c8e0e2c18a75e6174f4ca70';
  }

  title() {
    return this.title;
  }
}

class Playlist {
  constructor() {
    this.songs = [];
  }

  set(value) {
    this.songs.push(value);
  }

  getSongInfos(key) {
    return this.songs.find(song => song.url() === key);
  }

  /**
   * Get all the song's streamUrl
   * @returns {Array}
   */
  playablePlaylist() {
    return this.songs.map((value) => value.url())
  }
}

export { Song, Playlist };
