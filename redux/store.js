import { configureStore } from '@reduxjs/toolkit'
import loadCollection from './collectionSlice'

export default configureStore({
  reducer: {
      collection: loadCollection
  }
})