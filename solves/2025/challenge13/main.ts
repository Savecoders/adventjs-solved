/*
factory es un string[] donde cada celda puede ser:
    > < ^ v movimientos
    . salida correcta

Ten en cuenta que todas las filas tienen la misma longitud y que no habrá otros símbolos.

El regalo siempre empieza en la posición (0,0) (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (.) significa que ha salido correctamente de la fábrica.

Resultado

Devuelve uno de estos valores:

    'completed' si llega a un .
    'loop' si visita una posición dos veces
    'broken' si sale fuera del tablero


*/

type Factory = string[];
type ResultFactory = "completed" | "broken" | "loop";

function runFactory(factory: Factory): ResultFactory {
  const moves = { ">": [0, 1], "<": [0, -1], "^": [-1, 0], v: [1, 0] };
  const celdVisited = new Map<string, boolean>();

  let position: [number, number] = [0, 0];
  let result: ResultFactory = "broken";

  while (true) {
    const [row, col] = position;

    if (
      row < 0 ||
      row >= factory.length ||
      col < 0 ||
      col >= factory[0].length
    ) {
      result = "broken";
      break;
    }

    const cell = factory[row][col];

    if (cell === ".") {
      result = "completed";
      break;
    }

    const posKey = `${row}${col}`;
    if (celdVisited.has(posKey)) {
      result = "loop";
      break;
    }

    celdVisited.set(posKey, true);

    const [dRow, dCol] = moves[cell as keyof typeof moves];
    position = [row + dRow, col + dCol];
  }

  return result;
}

console.log(runFactory([">>."])); // 'completed'

runFactory([">>>"]); // 'broken'

runFactory([">><"]); // 'loop'

runFactory([">>v", "..<"]); // 'completed'

runFactory([">>v", "<<<"]); // 'broken'

runFactory([">v.", "^.."]); // 'completed'

runFactory(["v.", "^."]); // 'loop'
