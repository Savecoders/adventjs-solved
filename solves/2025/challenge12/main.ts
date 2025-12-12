/*
  A Ataque normal: causa 1 punto de daño si no es bloqueado
  B Bloqueo: bloquea un ataque normal (A)
  F Ataque fuerte: causa 2 puntos de daño, no puede ser bloqueado
*/

function elfBattle(elf1: string, elf2: string): number {
  type Actions = "A" | "B" | "F";

  const NetDamage: Record<string, { [key in Actions]: number }> = {
    A: { A: -1, B: 0, F: -1 },
    B: { A: 0, B: 0, F: -1 },
    F: { A: -2, B: -2, F: -2 },
  };

  let elf1Health = 3;

  let elf2Health = 3;

  for (let round = 0; round < elf1.length; round++) {
    const elf1Action = elf1[round];
    const elf2Action = elf2[round];

    elf1Health += NetDamage[elf2Action][elf1Action];
    elf2Health += NetDamage[elf1Action][elf2Action];
    if (elf1Health === 0 && elf2Health === 0) return 0;
    if (elf1Health <= 0) return 2;
    if (elf2Health <= 0) return 1;
  }

  return elf1Health === elf2Health ? 0 : elf1Health > elf2Health ? 1 : 2;
}

console.log(elfBattle("A", "B"));
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

console.log(elfBattle("F", "B"));
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

elfBattle("AAB", "BBA");
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

elfBattle("AFA", "BBA");
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

console.log(elfBattle("AFAB", "BBAF"));
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

elfBattle("AA", "FF");
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2
