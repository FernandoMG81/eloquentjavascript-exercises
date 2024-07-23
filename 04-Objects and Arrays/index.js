// Ejercicio #4.1

function rango(start, end, step = start < end ? 1 : -1) {
  const result = [];
  for (let i = start; (step > 0) ? i <= end : i >= end; i += step) {
    result.push(i);
  }

  return result;
}

function suma(arr) {
  let result = 0
  for (let n of arr) result += n
  return result
}


console.log(rango(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(5, 2, -1));
// → [5, 4, 3, 2]
console.log(suma(rango(1, 10)));
// → 55

// Ejercicio #4.2

function revertirArray(array) {
  let newArray = []
  for (let n of array) {
    newArray.unshift(n)
  }
  return newArray
}

function revertirArrayEnSuLugar(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }
}

console.log(revertirArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
// → [5, 4, 3, 2, 1]




// Ejercicio #4.3

function arrayALista(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listaAArray(list) {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
function preceder(value, list) {
  return { value, rest: list }
}
function posicion(list, n) {
  if (!list) return undefined
  else if (n == 0) return list.value
  else return posicion(list.rest, n - 1)
}

console.log(arrayALista([10, 20]));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(listaAArray(arrayALista([10, 20, 30])));
// → [10, 20, 30]
console.log(preceder(10, preceder(20, null)));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(posicion(arrayALista([10, 20, 30]), 1));
// → 20

// Ejercicio #4.4

function igualdadProfunda(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);
  console.log(keysA, keysB)

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !igualdadProfunda(a[key], b[key])) return false;
  }

  return true;
}

let objeto = { aqui: { hay: "un" }, objeto: 2 };
console.log(igualdadProfunda(objeto, objeto));
// → true
console.log(igualdadProfunda(objeto, { aqui: 1, object: 2 }));
// → false
console.log(igualdadProfunda(objeto, { aqui: { hay: "un" }, objeto: 2 }));
// → true