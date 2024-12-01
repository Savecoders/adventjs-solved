# Challenge #9

Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

```js
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)

```

## Mi Solucion

```ts
type Light = "🔴" | "🟢";
type Lights = Light[];

function adjustLights(lights: Lights): number {
  const leds: Record<Light, Light> = {
    "🔴": "🟢",
    "🟢": "🔴",
  };

  return [...lights].reduceRight(
    (acc: number, light: Light | undefined, index: number, array: Lights) => {
      if (light === array[index - 1]) {
        acc++;
        array[index - 1] = leds[light];
      }
      return acc;
    },
    0
  );
}


```
