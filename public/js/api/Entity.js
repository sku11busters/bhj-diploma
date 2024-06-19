/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  static URL = '';
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback){
    createRequest({
      url: this.URL,
      data: data,
      method: 'GET',
      callback: (err, response) =>{
        if(response.success && response){
          console.log('Данные получены')
        } else {
          err = new Error ('Ошибка получения даных')
        }
        callback(err, response);
      }
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest({
      url: this.URL,
      data: data,
      method: 'PUT',
      callback: (err, response) =>{
        if(response.success && response){
          console.log('Успешное создание')
        } else {
          err = new Error ('Ошибка создания')
        }
        callback(err, response);
      }
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback ) {
    createRequest({
      url: this.URL,
      data: data,
      method: 'DELETE',
      callback: (err, response) =>{
        if(response.success && response){
          console.log('Успешное удаление')
        } else {
          err = new Error ('Ошибка удаления')
        }
        callback(err, response);
      }
    });
  }
}
