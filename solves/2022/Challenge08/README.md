
## Challenge #8

Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

* Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:


**A partir de ahora todas mis soluciones seran en Typescript**


## Mi solucion

```ts

function checkPart(part: string) {
  const reverseArr = (str: string) => [...str].reverse().join("");

  // Check if the string is already a palindrome
  if (reverseArr(part) === part) return true;

  // Check if removing one character makes the string a palindrome
  return [...part].some((_, index) => {
    const slicePart = part.substring(0, index) + part.substring(index + 1);
    return slicePart === reverseArr(slicePart);
  });
}

```