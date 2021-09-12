import express from 'express';
import { initDatabaseConnection } from './config/db';
import { configureRoutes } from './routes';
import { applyMiddlewares } from './middlewares';
import { User } from './entities/User';

const PORT = process.env.PORT || 3001;
const app = express();

initDatabaseConnection()
  .then(async (connection) => {
    console.log(`👌 [POSTGRES]: Connection OK`);

    applyMiddlewares(app);
    configureRoutes(app);

    app.listen(PORT, () => {
      console.log(`🚀 [Users-service]: Running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
