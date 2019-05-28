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
        return {
          ...state,
          favoritePhotos: state.favoritePhotos.filter(item=>item.id !== action.data.id)
        }
      }
    default: return state;
  }
}