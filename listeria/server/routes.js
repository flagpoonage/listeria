'use strict';

const GET = 'GET', POST = 'POST', DELETE = 'DELETE';

module.exports = [

  // root
  {
    method: GET,
    path: '/',
    handler: function(rq, rp) {
    rp.view('index.hbs');
    }
  }

];
