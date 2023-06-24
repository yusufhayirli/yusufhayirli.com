// store.js
import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './reducers/infoReducer';
// import aboutSlice from './pages/About/aboutSlice';
// import contactSlice from './pages/Contact/contactSlice';

const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});

export default store;
