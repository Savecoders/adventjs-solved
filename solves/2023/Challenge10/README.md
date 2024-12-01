# Challenge #10

¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

```js
   1
  2 3
 1 2 3
1 2 3 1
   |


  *
 @ o
* @ o
  |

```

## Mi Solucion

```ts
function createChristmasTree(ornaments: string, height: number) {
  const heightSucessive = (height * (height + 1)) / 2;
  const ornamentsTree = ornaments.repeat(heightSucessive);
  console.log(ornamentsTree.length);

  let countLeaves = 0;
  let tree = "";

  for (let i = 0; i < height; i++) {
    const ornamentsLine =
      ornamentsTree
        .slice(countLeaves, i + 1 + countLeaves)
        .split("")
        .join(" ") + "\n";
    const spaces = " ".repeat(height - i - 1);
    countLeaves += i + 1;
    tree += spaces + ornamentsLine;
  }

  return tree + " ".repeat(height - 1) + "|\n";
}

```
