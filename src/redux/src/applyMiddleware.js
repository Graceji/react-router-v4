import compose from './compose';
import { createStore } from 'redux';

export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadState, enhancer) => {
    const store = createStore(reducer, preloadState, enhancer);
    let dispatch = store.dispatch;
    let chain = [];

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    };
    chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch
    };
  }
}

function middleware1(store) {
  return next => action => {
    console.log('A middleware1 开始');
    next(action);
    console.log('B middleware1 结束');
  }
}

function middleware2(store) {
  return next => action => {
    console.log('C middleware2 开始');
    next(action);
    console.log('D middleware2 结束');
  }
}

function middleware3(store) {
  return next => action => {
    console.log('E middleware3 开始');
    next(action);
    console.log('F middleware3 结束');
  }
}

function reducer(state, action) {
  if (action.type === 'MIDDLEWARE_TEST') {
    console.log("=======G=========");
  }
  return {};
}

var store = createStore(
  reducer,
  applyMiddleware(
    middleware1,
    middleware2,
    middleware3
  )
);

store.dispatch({type: 'MIDDLEWARE_TEST'});
