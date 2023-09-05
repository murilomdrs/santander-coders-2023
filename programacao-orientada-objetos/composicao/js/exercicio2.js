class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  calculateTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

const product1 = new Product('Camiseta', 34.90);
const product2 = new Product('Tênis', 289.90);
const product3 = new Product('Garrafa', 19.90);
const product4 = new Product('Calça Jeans', 69.90);
const product5 = new Product('Relógio', 129.90);

const shoppingCart1 = new ShoppingCart();
const shoppingCart2 = new ShoppingCart();

shoppingCart1.addItem(product1);
shoppingCart1.addItem(product3);
shoppingCart2.addItem(product2);
shoppingCart2.addItem(product4);
shoppingCart2.addItem(product5);

console.log(`O valor total do carrinho de compras é: R$ ${shoppingCart1.calculateTotal().toFixed(2)}`);
console.log(`O valor total do carrinho de compras é: R$ ${shoppingCart2.calculateTotal().toFixed(2)}`);