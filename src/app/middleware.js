import { createEpicMiddleware } from 'redux-observable';

export const epicMiddleware = createEpicMiddleware();

const middleware = [epicMiddleware];

export default middleware;
