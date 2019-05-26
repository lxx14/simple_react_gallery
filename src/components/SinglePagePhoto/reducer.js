const initialState = {
  favoritePhotos: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.data]
      }
    case "DELETE_FROM_FAVORITE":
      state.favoritePhotos.pop()
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos]
      }
    case "DELETE_IMG":
      let question = confirm(`do you wanna delete image № ${action.data.id} from favorite?`);
      if (question) {
        for (var i = 0; i < state.favoritePhotos.length; i++) {
          if (state.favoritePhotos[i].id === action.data.id) {
            state.favoritePhotos.splice(i, 1);
          }
        }
        return {
          ...state,
          favoritePhotos: [...state.favoritePhotos]
        }
      }
    default: return state;
  }
}