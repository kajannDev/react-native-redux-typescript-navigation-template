import { applyMiddleware, createStore } from "redux";
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import reducers from './reducers';
const middleware = createReactNavigationReduxMiddleware('root', (state) => state.nav);
export const addListener = createReduxBoundAddListener('root');
const createStoreWithMiddleware = applyMiddleware(middleware, thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);
//# sourceMappingURL=index.js.map