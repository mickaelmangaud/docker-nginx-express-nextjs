import { Application, Response, Request } from 'express';
import { usersController } from '../controllers/users.controller';

export function configureRoutes(app: Application) {
  /** Create User */
  app.post('/', (req: Request, res: Response) => {
    usersController
      .signUp(req.body)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    res.send(req.body);
  });
}
