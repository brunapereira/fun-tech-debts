const initialState = {
  AA: [],
  AB: [],
  BB: [],
  BA: []  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
       [action.name]: [...state[action.name], 'a']
      } 
  }
}

export default reducer
