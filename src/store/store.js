import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../reducers/greetingReducer';

const store = configureStore({
  reducer: {
    msg: greetingReducer,
  },
});

export default store;
