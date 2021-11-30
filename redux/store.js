import { configureStore } from '@reduxjs/toolkit';
import loadCollection from './collectionSlice';
import addCard from './deckSlice';

export default configureStore({
  reducer: {
      collection: loadCollection,
      deck: addCard,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})