# Variables
1. En esta actividad vamos definir variables para mostrar los elementos de nuestra biblioteca de peliculas.

   Tenemos 10 peliculas de accion, 12 de comedia, 8 de terror y 20 de ciencia ficcion
   
    1. Defina variables para mostrar el nombre de los generos de peliculas.
    2. Defina variables que almacenen la cantidad de peliculas por género

   Queremos mostrar el nombre de cada elemento junto con las cantidades de cada uno  en la consola (Pista: Usa `console.log();`)
   
``` javascript 
let cantidadPelisDeAccion = 10;
let cantidadPelisDeComedia = 12;
let cantidadPelisDeTerror = 8;
let cantidadPelisDeCienciaFiccion = 20;

let nombreAccion = 'Accion';
let nombreComedia = 'Comedia';
let nombreTerror = 'Terror';
let nombreCienciaFiccion = 'Ciencia Ficcion';

console.log(nombreAccion, ':', cantidadPelisDeAccion);
console.log(nombreComedia, ':', cantidadPelisDeComedia);
console.log(nombreTerror, ':', cantidadPelisDeTerror);
console.log(nombreCienciaFiccion, ':', cantidadPelisDeCienciaFiccion);

```
4. ¿Que sucede si queremos ver la cantidad de algun genero que no definimos en la biblioteca? Ejemplo: `cantidadPelisMusicales`.

5. ¿Que problema tiene la siguiente sentencia?
``` javascript 
console.log("Nueva biblioteca');
```