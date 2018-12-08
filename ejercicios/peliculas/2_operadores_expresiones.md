# Operadores y Expresiones

1. Agregamos peliculas nuevas a nuestra biblioteca: 5 de comedia y 2 de ciencia ficcion
   Actualice las cantidades de los elementos correspondientes en nuestra biblioteca. 
``` javascript 
let cantidadPelisDeComedia = 12;
let cantidadPelisDeCienciaFiccion = 20;
cantidadPelisDeComedia = cantidadPelisDeComedia + 5;
cantidadPelisDeCienciaFiccion = cantidadPelisDeCienciaFiccion + 2;
console.log(cantidadPelisDeComedia, cantidadPelisDeCienciaFiccion);
```
   
2. Defina una variable que tenga la cantidad total de capitulos que tienen las peliculas de ciencia ficcion sabiendo que cada una tiene 6 capitulos
``` javascript 
let cantidadPelisDeCienciaFiccion = cantidadPelisDeCienciaFiccion * 6;
console.log(cantidadPelisDeCienciaFiccion);
```

3. Defina la variable `hayPelisDeComedia` la cual determine si quedan peliculas de comendia en la biblioteca.
``` javascript 
let hayPelisDeComedia = cantidadPelisDeComedia > 0;
console.log('¿Quedan apósitos?', hayPelisDeComedia);
```
5. ¿Que problema tiene el siguiente código?
``` javascript 
let cantidadPelisDeTerror = '3';
cantidadPelisDeTerror = cantidadPelisDeTerror + 10;
console.log(cantidadPelisDeTerror);
```
