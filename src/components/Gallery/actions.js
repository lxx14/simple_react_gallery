import { getPhotosFromServer } from './service';

export const startFethPhotosActionType = () => ({
  type: "START_FETCH_PHOTOS"
})

export const successFetchPhotosActionType = (data) => ({
  type: "SET_PHOTOS",
  data
})

export const stopFethPhotosActionType = () => ({
  type: "STOP_FETCH_PHOTOS"
})

export const failFethPhotosActionType = () => {
  type: "FAIL_FETCH_PHOTOS"
}

export const fetchPhotosAction = () => (dispatch) => {  // его передаем в наш компонент, в котором через mapStateToProps присваиваем в ключ, который потом в последствии в компоненте выводим в componentDidMount

  dispatch(startFethPhotosActionType())

  getPhotosFromServer(1, 25).then(photos => dispatch(successFetchPhotosActionType(photos))).catch(error => dispatch(failFethPhotosActionType()));

  setTimeout(() => {
    dispatch(stopFethPhotosActionType()); // прекращаем анимацию загрузки после того, как выполнился успешный 
  }, 1000);
}