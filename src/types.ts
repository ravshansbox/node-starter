import { ParamsDictionary, Query, RequestHandler } from 'express-serve-static-core';

export type RouteEntry<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query,
  Locals extends Record<string, any> = Record<string, any>
> = {
  method: 'get' | 'post' | 'put' | 'delete';
  path: string;
  handler: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>;
};
