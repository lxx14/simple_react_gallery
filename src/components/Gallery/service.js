const client_id = `ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c`; //ключ клиента
const base_url = `https://api.unsplash.com/`; //неизменная часть адреса, у которого спрашиваем

export const getPhotosFromServer = (page=1, per_page=20) => { //указываем что можем менять количество на странице и номер страницы и задаем их по умолчанию

  const url = `${base_url}photos/?client_id=${client_id}&&page=${page}&per_page=${per_page}`; //собираем нашу ссылку в кучу

  return fetch(url).then((responce) => {return responce.json()});
}