
import dbConnect from './dbConfig.js';
import express from 'express';
import routes from './api_routes/routes.js';
import eurekaClient from './eureka-client.js';
const app = express();

app.use(express.json());
routes(app);
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});

dbConnect();