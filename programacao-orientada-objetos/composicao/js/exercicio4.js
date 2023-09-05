class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getInfo() {
    console.log(`O cliente ${this.name} reside no endereço ${this.address}`);
  }
}

class Account {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    this.balance -= value;
  }

  getBalance() {
    console.log(`O saldo da conta ${this.id} é R$ ${this.balance}`);
  }
}

class Bank {
  constructor() {
    this.customers = [];
    this.accounts = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  createAccount(customer, id, balance) {
    const account = new Account(id, balance);
    this.accounts.push({customer, account});
  }

  listCustomers() {
    this.customers.forEach((customer) => console.log(customer));
  }

  getBalance(id) {
    const account = this.accounts.find((item) => item.account.id === id);
    if (account) {
      account.account.getBalance();
    } else {
      console.log(`Conta com o ID ${id} não encontrada.`);
    }
  }
}

const bank = new Bank();

const customer1 = new Customer ('Pedro', 'Avenida Paulista');
const customer2 = new Customer('Maria', 'Rua Bela Vista');
const customer3 = new Customer('João', 'Avenida Copacabana');
const customer4 = new Customer('Ana', 'Rua Flores');
const customer5 = new Customer('Carlos', 'Avenida Central');

customer1.getInfo()
customer3.getInfo()
customer5.getInfo()

bank.listCustomers()
bank.addCustomer(customer1);
bank.addCustomer(customer2);
bank.addCustomer(customer4);
bank.listCustomers()
bank.createAccount(customer1, 1, 150);
bank.createAccount(customer2, 2, 450);

bank.getBalance(1)
bank.getBalance(2)