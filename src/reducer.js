import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

const initialState = {
  AA: {title: 'High Value, Low Effort', cards: []},
  AB: {title: 'High Value, High Effort', cards: []},
  BB: {title: 'Low Value, Low Effort', cards: []},
  BA: {title: 'Low Value, High Effort', cards: []}
}

const application = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
       [action.name]: {
         ...state[action.name],
         cards: [...state[action.name].cards, '']
       }
      } 
    default:
      return state
  }
}

export default combineReducers({ application, firebase })
