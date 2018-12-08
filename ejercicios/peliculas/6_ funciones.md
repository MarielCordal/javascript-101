# Funciones

1. Declare una función que muestre el mensaje `'Bienvenidos al nuevo Netflix!'`.
``` javascript 
function bienvenidos() {
  console.log('Bienvenidos al nuevo Netflix!');
}
bienvenidos();
``` 
2. Declare una función que reciba tu nombre como parametro y lo una al mensaje de bienvenida. 
``` javascript 
function bienvenido(nombre) {
  console.log('Bienvenido ' + nombre + ' al nuevo Netflix!!');
}
bienvenido('Mariel');
```
3. Utilice la función nativa de JavaScript `prompt()` para ingresar tu nombre y luego envielo como parametro a la función anterior.
``` javascript 
let nombre = prompt('¿Cuál es tu nombre?');
bienvenido(nombre);
```
4. Declare una función que calcule y retorne la cantidad de capitulos que tienen las peliculas de ciencia ficcion (Tal cual hicimos en el ejercicio 2 de _Operadores_);

``` javascript 
function capitulosEnNetflix(capitulosPorTemporada) {
  return capitulosPorTemporada * 6;
}
let cantidadPelisDeCienciaFiccion = 20;
console.log(capitulosEnNetflix(cantidadPelisDeCienciaFiccion));
```
5. ¿Qué sucederá si la función anterior la llamamos sin enviarle los parametros necesarios?
``` javascript 
console.log(capitulosEnNetflix());
```
6. Defina la función `sonIguales` que determine si 2 objetos son iguales o  no. A su vez, escriba un programa que use esta función y muestre un mensaje a partir de su resultado.
``` javascript

function sonIguales(elemento1, elemento2) {
  return elemento1.nombre === elemento2.nombre;
}

if(sonIguales(comedia, terror)) {
  console.log('Son el mismo elemento!');
} else {
  console.log('Son elementos diferentes!');
}
```

7. Defina la función `mostrarPeliculas` que muestre lo que contiene nuestro Netflix (que recibe como parametro) en forma de tabla como se describe abajo.(_Tip: Reusa las funciones anterior_). 

**Bienvenido Mariel al nuevo Netflix!**

| Elemento      | Cantidad      |
|:-------------:|:-------------:|
| Comedia       | 10            |
| ...           | ...           |

``` javascript
function mostrarPeliculas(nombre, peliculas){
...
}
let nombre = prompt('¿Cuál es tu nombre?');
mostrarPeliculas(nombre, peliculas);
```