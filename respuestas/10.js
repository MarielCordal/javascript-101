/*
    Vamos a crear una calculadora (😮) que reciba como parámetro:

        * La operación que queremos que realice (`sumar` o `restar`).
        * 2 números para que pueda realizar la cuenta.

        ```bash
        # Ejemplos de como vamos a ejecutar nuestra calculadora por la terminal

        # Sumar 2 números
        node calculadora.js sumar 10 50

        # Restar 2 números
        node calculadora.js restar 20 5
        ```

        La calculadora va a mostrar por la terminal:

        ```bash
        'La operación que se solicitó fue: ...'
        'El resultado es: ...'
        ```
*/

let operacion = process.argv[2];
let numero1ComoString = process.argv[3];
let numero2ComoString = process.argv[4];
let numero1 = Number(numero1ComoString);
let numero2 = Number(numero2ComoString);

console.log('La operación que se solicitó fue:', operacion);

if (operacion === 'sumar') {
    console.log('El resultado es', numero1 + numero2);
} else {
    console.log('El resultado es', numero1 - numero2);
}
