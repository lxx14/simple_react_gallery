import serverUrl from '../../system/serverUrlPhotos.json';


export const getPhotosFromServer = () => {
  return fetch(serverUrl.url).then((responce) => {return responce.json()})
}