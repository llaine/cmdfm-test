'use strict';

import request from 'request';

const API_ENDPOINT = 'http://cmdto.com/api/v1/apps/fm/genres/';

export default class Api {
  constructor(...params) {

  }

  getGenres() {
    return new Promise(function(resolve, reject) {
      request(API_ENDPOINT, (error, response, body) => {
        if(!error && response.statusCode === 200) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      });
    });
  }

  getSongFromGenre(genreName) {
    return new Promise(function(resolve, reject) {
      request(API_ENDPOINT + genreName, (error, response, body) => {
        if(!error && response.statusCode === 200) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      });
    });
  }

  getStreamUrl(streamUrl) {

    const opts = {
      url: streamUrl + '?client_id=26fb3c513c8e0e2c18a75e6174f4ca70',
      followAllredirects:true
    }

    return new Promise(function(resolve, reject) {
      request(opts,
          (error, response, body) => {
            if(!error && response.statusCode === 200) {
              resolve(response.request.uri.href);
            } else {
              reject(error);
            }
          }
      );
    });
  }
}
