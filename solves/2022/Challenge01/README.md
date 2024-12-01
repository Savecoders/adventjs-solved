
## Challenge #1


Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo *y para envolver un regalo se coloca el símbolo* de forma que rodee totalmente al string por todos los lados. Por ejemplo:

```js
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

```

### Mi Solucion:
```js

function wrapping(gifts) {
  return gifts.map(gift => {
    const giftWrap = `\n*${gift}*\n`
    const wrap = "*".repeat(gift.length + 2)
    return `${wrap}\n*${giftWrap}*\n${wrap}`
  })
}

```

Explicacion

- Solo necesitamos hacer la caja y que contenga cada uno de los valores

- Es decir va a tener la misma cantidad de valores por lo que usamos un Map

- EL resto seria tomar como valor base la cantidad de caracteres de la palabra + 2 por los espacios de cada lado

- Y por ultimo lo enviamos como un template string y listo!