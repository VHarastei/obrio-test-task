import { type compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { questionnaireReducer } from 'src/features/questionnaire';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const rootStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(rootStore);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
