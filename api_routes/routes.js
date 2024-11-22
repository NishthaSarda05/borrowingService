import appControllers from '../controllers/appController.js';
import { borrowControllers }  from '../controllers/borrowController.js';

const routes = (app) => {
  app.route('/').get(appControllers.default)
  app.route('/welcome').get(appControllers.about);
  app.route('/borrownow/:bookId').get(borrowControllers.brorrowNow);
}

export default routes;
