# Challenge #7

Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

```js
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/


```

## Mi Solucion

```ts
function drawGift(size: number, symbol: string): string {
  const skin = "#";

  if (size <= 1) return `${skin}\n`;

  const middle = size - 2;
  const middleBox = skin.repeat(size) + symbol.repeat(middle) + skin + "\n";
  let boxTop = " ".repeat(size - 1) + skin.repeat(size) + "\n";
  let boxBottom = "";

  for (let i = 0; i < middle; i++) {
    boxTop +=
      " ".repeat(middle - i) +
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(i) +
      skin +
      "\n";
  }

  for (let i = 0; i < middle; i++) {
    boxBottom +=
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(middle - i - 1) +
      skin +
      "\n";
  }

  boxBottom += skin.repeat(size) + "\n";

  return `${boxTop}${middleBox}${boxBottom}`;
}


```
