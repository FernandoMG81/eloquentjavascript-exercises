## Ejercicio #1

### Haciendo un triangulo con bucles

Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

```
#
##
###
####
#####
######
#######
```

Puede ser útil saber que puedes encontrar la longitud de un string escribiendo .length después de él:

let abc = "abc";
console.log(abc.length);
// → 3

## Ejercicio #2

### FizzBuzz

Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).

## Ejercicio #3

### Tablero de ajedrez

Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 y cambia el programa para que funcione con cualquier tamaño, dando como salida una cuadrícula con el alto y ancho dados.

## Ejercicio #4

### Mínimo

El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.

```javascript
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```

## Ejercicio #5

### Recursión

Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:

Zero es par.
Uno es impar.
Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.
Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto?

```javascript
console.log(esPar(50));
// → true
console.log(esPar(75));
// → false
console.log(esPar(-1));
// → ??
```

## Ejercicio #6

### Conteo de frijoles

Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f"). El primer carácter tiene posición cero, lo que hace que el último se encuentre en la posición string.length - 1. En otras palabras, un string de dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.

Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya en el string.

Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, excepto que toma un segundo argumento que indica el carácter que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula). Reescribe contarFs para que haga uso de esta nueva función.

```javascript
console.log(contarFs("FFC"));
// → 2
console.log(contarCaracteres("kakkerlak", "k"));
// → 4
```
