/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
  static URL = '/account';

  static get(id = '', callback) {
    createRequest({
      url: this.URL + '/' + id,
      method: 'GET',
      callback: (err, response)=>{
        if(response.user && response){
          console.log('Получена информация о счете', response.user)
        } else {
          err = new Error ('Ошибка получения информации о счете')
        }
        callback(err, response);
      }
    });
  }
}
