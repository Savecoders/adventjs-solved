
## Challenge #7

En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.

```js

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
```

### Mi Solucion

```js
function getGiftsToRefill(a1, a2, a3) {
  
  function rmRepeatGifs(gift) {
    return [... new Set(gift)]
  }
  
  const uniqueGiftsAll = rmRepeatGifs(a1.concat(a2).concat(a3))
   .filter((gift) => (
     a1.includes(gift) + 
     a2.includes(gift) + 
     a3.includes(gift) == 1))

  return uniqueGiftsAll || []
}
```
