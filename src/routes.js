import { Router } from 'express';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();

// controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

routes.get('/', (req, res) => {
  res.send({message: 'Hello World'})
})

// Users
routes.get("/users", UserController.list);
routes.get("/users/:id", UserController.get);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

// Login
routes.post('/session', SessionController.create)

// authenticated routes
routes.use(authMiddleware);

export default routes;