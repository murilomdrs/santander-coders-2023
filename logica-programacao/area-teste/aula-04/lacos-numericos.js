let objeto = {a:1, b:2, c:3};
console.log(objeto);

for(let prop in objeto) {
  console.log(prop);
  console.log(prop + ":" + objeto[prop]);
}

let array = [1,2,3,4,5];

for(let elemento of array) {
  console.log(elemento);
}