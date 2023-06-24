// store.js
import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './reducers/infoReducer';
// import aboutSlice from './pages/About/aboutSlice';
// import contactSlice from './pages/Contact/contactSlice';

const store = configureStore({
  reducer: {
    info: infoReducer,
    // about: aboutSlice.reducer,
    // contact: contactSlice.reducer,
  },
});

export default store;