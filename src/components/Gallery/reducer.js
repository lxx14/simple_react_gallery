const initialState = {
  photos: [],
  favorite: []
}

export default function(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case "SET_PHOTOS": 
    return {
      ...state,
      photos: [...action.data]
    }
    default: return state;
  }
}