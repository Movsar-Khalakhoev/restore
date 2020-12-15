export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Тысяча сияющих солнц',
      author: 'Халед Хоссейни',
      price: 30,
      image: 'https://clck.ru/SUEwo'
    },
    {
      id: 2,
      title: 'Самый богатый человек в Вавилоне',
      author: 'Джордж Самюэль Клейсон',
      price: 47,
      image: 'https://clck.ru/SUEvp'
    }
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}