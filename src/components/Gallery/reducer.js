const initialState = {
  photos: [],
  isLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case "SET_PHOTOS": 
    return {
      ...state,
      photos: [...action.data]
    }
    default: return state;
  }
}