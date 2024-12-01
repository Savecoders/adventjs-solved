## Challenge #6

Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

```js

  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
// const cube = createCube(3)

```

A tener en cuenta:

- Fíjate bien en los espacios en blanco que hay en el cubo.
- El cubo tiene que ser simétrico.
- Asegúrate de usar los símbolos correctos.
- Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.

### Mi Solucion

```js
function createCube(size) {

  const OPENCUBE = "/"
  const DEGLOSE = "\\"
  const LAYAOUT_3D = "_"
  let top = [], down = []
  // `${(OPENCUBE+DEGLOSE).repeat(3)+(LAYAOUT_3D+DEGLOSE).repeat(3)}`

  for (let index = 1; index <= size; index++) {
    top.push(`${(" ").repeat(size - index) + (OPENCUBE + DEGLOSE).repeat(index) + (LAYAOUT_3D + DEGLOSE).repeat(size)}`)
    down.push(`${(" ").repeat(index - 1) + (DEGLOSE + OPENCUBE).repeat(size + 1 - index) + (LAYAOUT_3D + OPENCUBE).repeat(size)}`)
  }

  return top.concat(down).join('\n')
}
```
