import controllers from '../controllers/appController.js';

const routes = (app) => {
  app.route('/').get(controllers.default)
  app.route('/welcome').get(controllers.about);
}

export default routes;
