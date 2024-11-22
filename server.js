
import dbConnect from './dbConfig.js';
import express from 'express';
import routes from './api_routes/routes.js';
import eurekaClient from './services/eureka-client.js'; // Use import instead of require

const app = express();

app.use(express.json());
routes(app);
const port = 3001;

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});

dbConnect();