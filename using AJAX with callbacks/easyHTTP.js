/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 1.0.0
 * @author  Ritesh Panda
 *
 **/

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// GET Request
easyHTTP.prototype.get = function (url, callback) {
  let self = this;

  this.http.open('GET', url, true);

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

// POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  let self = this;

  this.http.open('POST', url, true);

  this.http.setRequestHeader('content-type', 'application/json');

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  let self = this;

  this.http.open('PUT', url, true);

  this.http.setRequestHeader('content-type', 'application/json');

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  let self = this;

  this.http.open('DELETE', url, true);

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
