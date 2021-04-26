import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import reducer from './reducer';
import { IState } from './state';

declare let window: any;

const store = createStore(
  reducer,
  applyMiddleware(thunk as ThunkMiddleware<IState, any>),
);

window.store = store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
