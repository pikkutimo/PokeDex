import { createSlice } from '@reduxjs/toolkit'

export const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    cardList: []
  },
  reducers: {
    loadCollection: (state, action) => {
      state.cardList = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { loadCollection } = collectionSlice.actions

export default collectionSlice.reducer