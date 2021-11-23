import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducers';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const initData = () => {
  const data = localStorage.getItem('contacts');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const preloadState = {
  contacts: initData(),
  filter: '',
};

const store = configureStore({
  reducer: reducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: preloadState,
});

export default store;
