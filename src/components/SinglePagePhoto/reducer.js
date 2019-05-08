const initialState = {
  favoritePhotos: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case "ADD_TO_FAVORITE": 
    return {
      ...state,
      favoritePhotos: [...state.favoritePhotos, action.data]
    }
    default: return state;
  }
}