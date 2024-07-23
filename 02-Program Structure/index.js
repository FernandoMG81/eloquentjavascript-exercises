// Ejercicio #2.1

for (let i = "#"; i.length < 7; i += "#") {
  console.log(i);
}

// Ejercicio #2.2

for (let i = 1; i <= 100; i++) {
  let w = ""
  if (i % 2 === 0) w += "Fizz"
  if (i % 5 === 0) w += "Buzz"
  console.log(w || i)
}

// Ejercicio #2.3

let line = ""
function crearTablero() {
  for (let i = 0; i < 8; i++) {
    line = ""
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        line += " "
      }
      else {
        line += "#"
      }
    }
    console.log(line)
  }
}

crearTablero()