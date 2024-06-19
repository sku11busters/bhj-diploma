/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    let button = document.querySelector('.sidebar-toggle');
    let mini = document.querySelector('.sidebar-mini');
    button.addEventListener('click', (e) =>{
      e.preventDefault();
      mini.classList.toggle('sidebar-open');
      mini.classList.toggle('sidebar-collapse');
      return false;
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    let login = document.querySelector('.menu-item_login');
    login.addEventListener('click', (e)=>{
      e.preventDefault();
      App.getModal('login').open();
    })

    let register = document.querySelector('.menu-item_register');
    register.addEventListener('click', (e)=>{
      e.preventDefault();
      App.getModal('register').open();
    })
    
    let logout = document.querySelector('.menu-item_logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout((err, response)=>{
        if(response.success == true){
          App.setState('init');
        } else {
          err = new Error ('Не удалось выйти')
        }
      })
    })
  }
}