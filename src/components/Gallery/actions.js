export const startFethPhotosActionType = () =>({
  type: "START_FETCH_PHOTOS"
})

export const successFetchPhotosActionType = (data) => ({
  type: "SET_PHOTOS",
  data
})

export const stopFethPhotosActionType = () =>({
  type: "STOP_FETCH_PHOTOS"
})

export const fetchPhotosAction = () => (dispatch) => {
  
}