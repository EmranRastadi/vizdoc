import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import informationReducer from './commons/redux/information/information-slice';
import { serviceApi } from './commons/apis/information-slice-api';

export const store = configureStore({
  reducer: {
    information: informationReducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(serviceApi.middleware);
  },
});
