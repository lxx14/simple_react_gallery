const initialState = {
  photos: [],
  isLoading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "START_FETCH_PHOTOS":
      return {
        ...state,
        isLoading: true
      }
    case "SET_PHOTOS":
      return {
        ...state,
        photos: [...action.data]
      }
    case "STOP_FETCH_PHOTOS":
      return {
        ...state,
        isLoading: false
      }
    default: return state;
  }
}