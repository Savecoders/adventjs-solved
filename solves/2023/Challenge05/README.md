# Challenge #5

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa

* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

```js
const road = "S..|...|..";
const time = 10; // units of time
const result = cyberReindeer(road, time);
console.log(result);


```

## Mi Solucion

```ts
function cyberReindeer(road: string, time: number): string[] {
  road = road.replace("S", ".");
  const roadLen = road.length;
  const reindeer = Array(time).fill(road);
  const timeOpenBarrier = 5;
  let pivot = 0;
  const result = reindeer.map((_, index) => {
    if (index === timeOpenBarrier) road = road.replaceAll("|", "*");
    if (road[pivot] !== "|") pivot += 1;
    const start = road.substring(0, pivot - 1);
    const end = road.substring(pivot, roadLen);
    return `${start}S${end}`;
  });
  return result;
}


```
