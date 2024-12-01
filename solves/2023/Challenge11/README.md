# Challenge #11

En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

Si ya es un palíndromo, un array vacío.
Si no es posible, null.
Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
Por ejemplo:

```js
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
```

## Mi Solucion

```ts
function getIndexsForPalindrome(word: string) {
  const isPalindromo = (word: string) => word === [...word].reverse().join("");

  if (isPalindromo(word)) return [];

  const burble = (array: string[], poss: number[]) => {
    const flap = array[poss[0]];
    array[poss[0]] = array[poss[1]];
    array[poss[1]] = flap;
    return array;
  };

  const middle = Math.floor(word.length / 2);

  const swapped = [...word];

  const left = swapped.slice(0, middle).join("");

  const right = swapped.slice(middle).reverse().join("");

  const poss = [];

  for (let i = 0; i < right.length; i++) {
    if (right[i] !== left[i] || left[i] === undefined) {
      poss.push(i);
    }
  }

  const normal = burble(swapped, poss).join("");
  const reverse = burble(swapped.reverse(), poss).join("");

  if (isPalindromo(normal)) return poss;
  if (isPalindromo(reverse)) {
    const poss1 = poss[0] + middle;
    const poss2 = poss[1] + middle;
    return [poss1, poss2];
  }

  return null;
}


```
