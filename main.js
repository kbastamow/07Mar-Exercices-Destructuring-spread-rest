console.log("Ejercicios destructuring");


// Ejercicios destructuring
// Dado el siguiente objeto:


const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}
// Extrae el email del empleado Luis --> Luis@gmail.com

const [one, two, three] = empleados;

const {name, email} = one;

console.log(two);
console.log(email);



// Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

const {name:nombre, type, moves} = pokemon;
console.log(nombre);
console.log(type);

const [, moveTwo] = moves;

console.log(moveTwo);
// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
// Extrae el tipo de Pokemon que es
// Extrae el movimiento “Tackle”


console.log("Ejercicios spread/rest");

// Ejercicios spread/rest
// ●	Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const merger = {...pokemon, ...pikachu};
console.log(merger);


// ●	Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26 


function sumEveryOther(...numbers) {
    return numbers.reduce((acc, value) => acc + value);
   }

console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));



// ●	Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
// addOnlyNums(1, 'perro', 2, 4); //7

function addOnlyNums(...values){
    let sum = 0;
    for (const value of values) {
        if (typeof value === "number") {
            sum += value;
        }
        
    }
  return sum;
}

console.log(addOnlyNums(1, 'perro', 2, 4));




// ●	Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4


function countTheArgs(...values) {
    return values.length;
}

console.log(countTheArgs('gato', 'perro', 'pollo', 'oso'));




// ●	Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).



function combineTwoArrays(arrOne, arrTwo) {
    return ([...arrOne, ...arrTwo]);
}


console.log(combineTwoArrays([1, 2, 3, 4, 5], [11, 12, 13, 14, 15]));


console.log("Extras");


// ●	Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};


const {today:maximaHoy} = HIGH_TEMPERATURES;
const {tomorrow:maximaManana} = HIGH_TEMPERATURES;
console.log(maximaHoy)
console.log(maximaManana)


// ○	Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy)
// console.log(maximaManana)


function onlyUniques(...values) {
    const unique = new Set(values);
    return Array.from(unique);
}

console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));



// ●	Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
// onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
// //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function combineAllArrays(...arrays) {
    let combined = [];
    for (array of arrays) {
        combined.push(...array);
    }
    return combined;
}
console.log(combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]));




// ●	Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


function sumAndSquare(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number * number;      
    }
 return result;
}

console.log(sumAndSquare(2, 5, 10));

// ●	Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.




