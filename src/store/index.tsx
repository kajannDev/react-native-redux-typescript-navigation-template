import { applyMiddleware, createStore } from "redux";
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import reducers from './reducers'

interface IState {
    nav: any;
}

const middleware = createReactNavigationReduxMiddleware('root', (state: IState) => state.nav);
export const addListener = createReduxBoundAddListener('root');

const createStoreWithMiddleware = applyMiddleware(middleware, thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);