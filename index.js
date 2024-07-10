// Ejercicio #1

for (let i = "#" ; i.length < 7 ; i += "#"){
  console.log(i);
}

// Ejercicio #2

for (let i = 1 ; i <= 100 ; i++){
  let w = ""
  if(i % 2 === 0) w += "Fizz"
  if(i % 5 === 0) w += "Buzz"
  console.log(w || i)  
}

// Ejercicio #3

let line = ""
function crearTablero() {
  for (let i = 0; i < 8 ; i++){
    line = ""
    for (let j = 0 ; j < 8 ; j++){
      if( (i + j ) % 2 === 0 ){
        line += " "
      }
      else{
        line += "#"
      }
    }
    console.log(line)
  }
}

crearTablero()

// Ejercicio #4

function min(n1, n2) {
  return n1 < n2 ? n1 : n2
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Ejercicio #5
function esPar(n){
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

//Ejercicio #6

function contarFs(str){
  let cont = 0
  for (let i = 0 ; i < str.length ; i++){
    if(str[i] === "F") cont++
  }

  return cont
}

function contarCaracteres(str, character){
  let cont = 0
  for (let i = 0 ; i < str.length ; i++){
    if(str[i] === character) cont++
  }

  return cont
}

console.log(contarFs("FFC"));
// → 2
console.log(contarCaracteres("kakkerlak", "k"));
// → 4