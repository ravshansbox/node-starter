import express from 'express';
import type { RouteEntry } from './types';
import date from './routes/date';

export const app = express();

export const registerRouteEntry = ({ method, path, handler }: RouteEntry) => {
  console.info('Route', method.toUpperCase(), path);
  app[method](path, handler);
};

registerRouteEntry(date);
