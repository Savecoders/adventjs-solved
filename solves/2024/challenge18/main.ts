function findInAgenda(
  agenda: string,
  phone: string,
): { name: string | undefined; address: string } | null {
  const regexName = /<([^>]+)>/g;
  const regexPhone = /\+[\d-]+/;
  const entries = agenda.split('\n');
  const agendaData = entries.map(entry => {
    const name = entry.match(regexName)?.[0].slice(1, -1);
    const thisPhone = entry.match(regexPhone)?.[0];
    const address = entry.replace(regexName, '').replace(regexPhone, '').trim();
    return {
      name,
      thisPhone,
      address,
    };
  });
  const filterByPhone = agendaData.filter(({ thisPhone }) => thisPhone?.includes(phone));
  return filterByPhone?.length === 0 || filterByPhone?.length > 1
    ? null
    : {
        name: filterByPhone[0].name,
        address: filterByPhone[0].address,
      };
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, '34-600-123-456'));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'));
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'));
// null
// Explicación: Demasiados resultados
