import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';

export default (initialState) => {
  const logger = createLogger();
  return createStore(
    reducers,
    initialState,
    applyMiddleware(logger)
  );
}
