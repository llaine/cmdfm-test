'use strict';

/**
 * cmdfm - models
 * @author llaine
 * @date 18/12/2015
 */

export default class Song {
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
}