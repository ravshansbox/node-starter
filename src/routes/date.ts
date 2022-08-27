import { RouteEntry } from '../types';

export default {
  method: 'get',
  path: '/date',
  handler: (_request, response) => {
    response.send({ date: new Date().toISOString() });
  },
} as RouteEntry;
