'use strict';

var helpers = require('hbs-helpers');
let hbs = require('handlebars');

module.exports = {
  options: {
    engines: {
      hbs: hbs
    },
    relativeTo: __dirname,
    path: '../views'
  },

  initializeHelpers: () => {

    for(var i in helpers) {
      if(helpers.hasOwnProperty(i)) {
        console.log('Adding handlerbars helper "' + i + '"');
        hbs.registerHelper(i, helpers[i]);
      }
    }
  }
};
