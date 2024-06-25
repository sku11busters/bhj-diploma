/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.element = element;
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    Account.list(User.current(), (err, response) => {
      if (response && response.success) {
        const accountsSelect = this.element.querySelector('.accounts-select');
        const optionsMarkup = response.data.reduce((markup, account) => {
          return markup + `<option value="${account.id}">${account.name}</option>`;
        }, '');
        accountsSelect.innerHTML = optionsMarkup;
      }
    });
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (response && response.success) {
        this.element.reset();
        if(this.element.id === 'new-income-form'){
          App.getModal('newIncome').close();
        } else if(this.element.id === 'new-expense-form') {
          App.getModal('newExpense').close();
        }
        App.update();
      }
    });
  }
}