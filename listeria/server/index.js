'use strict';

let Hapi = require('hapi');
let server = new Hapi.Server();

server.connection({
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || 8000
});

server.register([
  require('init/inert'),
  require('init/vision') ],

  err => {
    if(err) {
      console.log(err);
      return;
    }

    var views = require('./views');

    server.route(require('./routes'));
    server.views(views.options);

    require('init/knex');

    views.initializeHelpers();
  }
);

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
