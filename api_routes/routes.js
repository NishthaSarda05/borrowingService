import appControllers from '../controllers/appController.js';
import { borrowControllers }  from '../controllers/borrowController.js';
import { returnController } from '../controllers/returnController.js';

const routes = (app) => {
  app.route('/').get(appControllers.default)
  app.route('/welcome').get(appControllers.about);
  app.route('/borrownow/:userId/:bookId').get(borrowControllers.brorrowNow);
  app.route('/isbookavailable/:bookId').get(borrowControllers.isBookAvailable);
  app.route('/returnbook/:userId/:bookId').get(returnController.returnBook);
}

export default routes;
