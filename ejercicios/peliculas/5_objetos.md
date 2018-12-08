# Objetos

1. Defina una variable que almacene la información de las peliculas como un objeto y muestre sus propiedades en la consola.
   (Pista: Defina el objeto con las propiedades `nombre` y `cantidad`).
``` javascript 
let peliculaDeCienciaFiccion = {
  nombre: 'Volver al futuro',
  cantidad: 3
};
console.log(peliculaDeCienciaFiccion.nombre, peliculaDeCienciaFiccion.cantidad);
```

2. Agregue la propiedad `fechaDeEstreno` al objeto _peliculaDeCienciaFiccion_ con el valor `'1985'`.
``` javascript 
let peliculaDeCienciaFiccion = {
  nombre: 'Volver al futuro',
  cantidad: 3
};
peliculaDeCienciaFiccion.fechaDeEstreno = '1985';
console.log(peliculaDeCienciaFiccion);
```

3. Cambie el nombre de la pelicula por `'Cazafantasmas'` y muestrelo en la consola. 
``` javascript 
let peliculaDeCienciaFiccion = {
  nombre: 'Volver al futuro',
  cantidad: 3
};
peliculaDeCienciaFiccion.nombre = 'Cazafantasmas';
console.log(peliculaDeCienciaFiccion.nombre, peliculaDeCienciaFiccion.cantidad);
```

4. Cambie todos los elementos de la biblioteca a objetos con la misma estructura. 
``` javascript 

let peliculas = [
  {
    nombre: 'Comedia',
    cantidad: 13
  }, 
  {
    nombre: 'Terror',
    cantidad: 11
  },
  {
    nombre: 'Ciencia Ficcion',
    cantidad: 3
  },
  {
    nombre: 'Accion',
    cantidad: 4
  }
]; 
console.log(peliculas);
```

5. Recorra las peliculas con los nuevos objetos mostrando el `nombre` y la `cantidad` de cada elemento.
``` javascript
let indice = 0;
while(indice < peliculas.length) {
  let elemento = peliculas[indice];
  console.log(elemento.nombre, elemento.cantidad);
  indice = indice + 1;
}
```
