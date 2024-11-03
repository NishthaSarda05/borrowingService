'use strict';

const controller = require('../controllers/appController');

module.exports = (app) => {
  app.route('/').get(controller.default)
  app.route('/welcome').get(controller.about);
}

