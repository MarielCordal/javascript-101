# Arrays

1. Defina la biblioteca de peliculas como un **arreglo** con los generos que contiene. 
``` javascript
let pelis = ['Comedia', 'Terror', 'Ciencia Ficcion', 'Accion'];
console.log(pelis);
```

2. Muestre en la consola la cantidad de elementos que contiene pelis. 
``` javascript
let cantidadDeElementos = pelis.length;
console.log(cantidadDeElementos);
```

3. Obtenga el primer elemento y el ultimo que contiene pelis.
   (Tip: _Los índices de los arrays comienzan desde 0._)
``` javascript 
let primerElemento = pelis[0];
let ultimoElemento = pelis[ pelis.length - 1 ];
console.log(primerElemento, ultimoElemento);
```

4. Defina un arreglo con las cantidades de cada elemento de la biblioteca en la misma posicion definida anteriormente. 
   Luego muestre la cantidad de peliculas de terror que hay, de la forma `NOMBRE: CANTIDAD`.
``` javascript 
let pelis = ['Comedia', 'Terror', 'Ciencia Ficcion', 'Accion'];
let cantidades = [13, 10, 3, 4];
let indiceDeTerror = 1;
console.log(pelis[indiceDeTerror], ':', cantidades[indiceDeTerror]);
```

5. Agregamos nuevamente peliculas, en este caso 1 Documental. Agregue este elemento al arreglo.
(Pista: Llame al método _push_ sobre `pelis`)
``` javascript 
pelis.push('Documental');
console.log(pelis);
```

6. Quite el último elemento agregado a las peliculas. 
(Pista: Llame al método _pop_ sobre el `pelis`)
``` javascript 
let ultimoElemento = pelis.pop();
console.log(pelis, ultimoElemento);
```
7. ¿Qué elemento tomaremos en esta sentencia?
``` javascript
console.log(pelis[ pelis.length ]);
```
