class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    console.log(`O ${this.brand} ${this.model} é um veículo do ano ${this.year}`);
  }
}

class Garage {
  constructor() {
    this.vehicles = [];
  }

  parkVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  listVehicles() {
    console.log(this.vehicles);
  }
}

const car1 = new Vehicle('Toyota', 'Yaris', 2022);
const car2 = new Vehicle('Honda', 'Civic', 2023);
const car3 = new Vehicle('Ford', 'Focus', 2022);
const car4 = new Vehicle('Chevrolet', 'Malibu', 2023);
const car5 = new Vehicle('Nissan', 'Altima', 2022);

const garage1 = new Garage();

garage1.parkVehicle(car1);
garage1.parkVehicle(car2);
garage1.parkVehicle(car4);

garage1.listVehicles();
car1.getInfo();
car4.getInfo();