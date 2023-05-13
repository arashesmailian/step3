import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './reducers/todo.reducer'
import {combineReducers} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: storage,
}

export const rootReducers = combineReducers({
  todo: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store
