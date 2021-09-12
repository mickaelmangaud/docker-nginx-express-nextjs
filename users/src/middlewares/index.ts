import express, { Application } from 'express';

export function applyMiddlewares(app: Application) {
  app.use(express.json());
  app.use(express.urlencoded());
}
