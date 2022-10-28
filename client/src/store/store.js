import { configureStore } from '@reduxjs/toolkit'
import musicReducer from './reducers/musicReducer'

export const store = configureStore({
  reducer: {
    musicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
