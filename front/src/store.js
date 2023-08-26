// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/infoReducer';
// import aboutSlice from './pages/About/aboutSlice';
// import contactSlice from './pages/Contact/contactSlice';

const store = configureStore({
  reducer: {
    info: rootReducer,
  },
});

export default store;
