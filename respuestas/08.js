/*
    Dado el siguiente array de meses del año:

        ```javascript
        let meses = [
            'Enero', // índice `0`
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'  // índice 11, equivalente a `meses.length - 1`
        ];
        ```

        Escribir un programa que:

        1. Declare y asigne una variable que tenga como valor el **_número_** del mes de tu cumpleaños.
        1. Muestre por terminal el **_nombre_** del mes de tu cumpleaños.
*/

 let meses = [
    'Enero', // índice `0`
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'  // índice 11, equivalente a `meses.length - 1`
];

let numeroDelMesDeMiCumpleanos = 5;
let nombreDelMesDeMiCumpleanos = meses[5 - 1];

console.log(nombreDelMesDeMiCumpleanos);

/*
    Dado los siguientes arrays:

        ```javascript
        let meses = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ];

        let planetas = [
            'Mercurio',
            'Venus',
            'Tierra',
            'Marte',
            'Saturno',
            'Jupiter',
            'Urano',
            'Neptuno',
            'Plutón'
        ];
        ```

        1. Mostrar por la terminal la cantidad de elementos que tiene cada uno.
        1. Mostrar por la terminal el último elemento de cada array (usando la propiedad `length` que tienen los arrays).
        1. Mostrar el cuarto planeta por pantalla (`Marte`).
*/

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]
let planetas = [
    'Mercurio',
    'Venus',
    'Tierra',
    'Marte',
    'Saturno',
    'Jupiter',
    'Urano',
    'Neptuno',
    'Plutón'
];

console.log(meses.length);
console.log(planetas.length);

console.log(meses[meses.length - 1]);
console.log(planetas[planetas.length - 1]);

console.log(planetas[3]);

/*
    1. Dado el siguiente array de nombres:

        ```javascript
        var nombres = ['Sofía', 'Abril'];
        var apellidos = ['Rodriguez', 'López'];
        ```

        1. Mostrar por la terminal el primer elemento de cada array.
        1. Crear un nuevo array llamado `nombreCompleto` que contenga el segundo elemento del array `nombres` y el primer elemento del array `apellidos`. Mostrar el nuevo array por la terminal.
*/

let nombres = ['Sofía', 'Abril'];
let apellidos = ['Rodriguez', 'López'];

console.log(nombres[0]);
console.log(apellidos[0]);

let nombreCompleto = [nombres[1], apellidos[0]];
console.log(nombreCompleto);

/*
    1. Dado el siguiente array de participantes de una carrera y considerando que están ordenados en base al orden de llegada (el primer elemento es el primero en haber llegado):

        ```javascript
        let corredores = [
            'Margarita', // ganó la carrera
            'Juan',
            'Raquel',
            'Ezequiel',
            'Gonzalo',
            'Martina',
            'Julian' // último 🙁
        ];
        ```

        1. Mostrar por la terminal los 3 primeros en llegar a la meta usando índices numéricos.
        1. Crear un nuevo array llamado `losUltimos` que contenga los 2 últimos corredores en llegar (usando la propiedad `length` que tienen los arrays). Mostrar este nuevo array por la terminal.
*/

let corredores = [
    'Margarita', // ganó la carrera
    'Juan',
    'Raquel',
    'Ezequiel',
    'Gonzalo',
    'Martina',
    'Julian' // último 🙁
];

console.log(corredores[0]);
console.log(corredores[1]);
console.log(corredores[2]);

let losUltimos = [corredores[corredores.length - 1], corredores[corredores.length - 2]];
console.log(losUltimos);
