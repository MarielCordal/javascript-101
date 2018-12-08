# Estructuras de control

1. Recorra todos los generos de nuestras peliculas y muestre de a uno en la consola. (Pista: Usa la sentencia `forEach`).
``` javascript 
    let peliculas = ['Comedia', 'Terror', 'Ciencia Ficcion', 'Accion'];

    for (let index = 0; index < peliculas.length; index++) {
        console.log(peliculas[indice]);   
    }
```
2. Recorra la biblioteca y muestre el mensaje `'Tenemos peliculas musicales.'` hay peliculas del genero musicales. 
``` javascript 
let peliculas = ['Comedia', 'Terror', 'Ciencia Ficcion', 'Accion'];
let indice = 0;
let hayMusicales = false;
while(indice < peliculas.length) {
  if(peliculas[indice] == 'Musicales') {
    hayMusicales = true;
  }
  indice = indice + 1;
}

if(hayMusicales) {
  console.log('Tenemos peliculas musicales.');
}
```