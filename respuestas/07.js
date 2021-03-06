/*
    Juan y Maria son hermanos. La semana pasada tuvieron que anotarse a la colonia, asi que les preguntaron sus edades. Escribir un programa que:
        1. Declare y asigne 2 variables de tipo número: una con la edad de Juan (`10`) y otra con la edad de Maria (`8`). Nombrá a las variables como más te guste.
        1. Mostrar por la terminal el valor más grande de los 2.
        1. Considerá el caso de que pueden ser iguales 🙊. Si eso ocurre, mostrar el mensaje: `'Ambos hijos tienen la misma edad'`.

        Casos que te pueden ayudar para probar:

        1. Si Juan se saca un `4` y Maria un `6`. Mostrar `6`.
        1. Si Juan se saca un `9` y Maria un `8`. Mostrar `9`.
        1. Si ambos se sacan un `7`, mostrar `'Ambos hijos tuvieron la misma edad'`.
*/

var edadDeJuan = 10;
var edadDeMaria = 8;

if (edadDeJuan > edadDeMaria) {
    console.log(edadDeJuan);
} else if (edadDeMaria > edadDeJuan) {
    console.log(edadDeMaria);
} else {
    console.log('Ambos hijos tienen la misma edad');
}

/*
    Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir un programa que dado el monto de una compra como valor numérico, diga cuanto debe abonar el cliente aplicando el descuento si es necesario.

        > Tip: Para obtener el porcentaje de un número podés usar la siguiente fórmula: `número * descuento / 100` (La famosa regla de 3 simple 😮).

        Si el monto de compra es de 500 pesos, ¿cuánto debe pagar el cliente?

        Casos que te pueden ayudar para probar:

        1. Si el monto de la compra es `55`. Mostrar `55` (Es menor a 100, por lo que no se aplica descuento).
        1. Si el monto de la compra es 200. Mostrar `170`, equivalente a `200 - descuento`. Para calcular el descuento ya te dí una pista 😉.
*/

var compra = 500;

if (compra > 100) {
    var descuento = compra * 15 / 100;

    console.log(compra - descuento);
} else {
    console.log(compra);
}
