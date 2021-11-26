import { createSlice } from '@reduxjs/toolkit'

const addAmountToObject = (card) => {
  const tempCard = {...card, numberOfCards: 1}
  return tempCard
}

const isInDeck = (array, cardId) => {
  return array.some(card => {
    return card.id === cardId
  })
}

const incrementAmount = (array , cardId) => {
  const updatedCards = array.map(card => {
    if (card.id !== cardId) {
      return card
    }
    // remember to not touch the original value
    const updatedCard = card
    updatedCard.numberOfCards += 1
    return updatedCard
  })

  return updatedCards
}

const decrementAmount = (array, cardId) => {
  const updatedCards = array.filter(card => card.id !== cardId)
  return updatedCards
}

export const deckSlice = createSlice({
  name: 'deck',
  initialState: {
    deckList: []
  },
  reducers: {
    addCard: (state, action) => {
      if (isInDeck(state.deckList, action.payload.id)) {
        const updatedDeck = incrementAmount(state.deckList, action.payload.id)
        state.deckList = [...updatedDeck]
      } else {
        const alteredCard = addAmountToObject(action.payload)
        state.deckList = [...state.deckList, alteredCard]
      }
      
    },
    removeCard: (state, action) => {
      // state.deckList = state.deckList.filter((item, index) => index !== action.payload.index)
      const updatedDeck = decrementAmount(state.deckList, action.payload)
      state.deckList = [...updatedDeck]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addCard, removeCard } = deckSlice.actions

export default deckSlice.reducer