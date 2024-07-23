// Ejercicio #3.1

function min(n1, n2) {
  return n1 < n2 ? n1 : n2
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Ejercicio #3.2
function esPar(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return esPar(-n);
  else return esPar(n - 2);
}

console.log(esPar(50));
// → true
console.log(esPar(75));
// → false
console.log(esPar(-1));
// → ??

//Ejercicio #3.3

function contarFs(str) {
  let cont = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "F") cont++
  }

  return cont
}

function contarCaracteres(str, character) {
  let cont = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) cont++
  }

  return cont
}

console.log(contarFs("FFC"));
// → 2
console.log(contarCaracteres("kakkerlak", "k"));
// → 4
