function drawTable(data: Array<Record<string, string | number>>) {
  const LINE = '-';
  const BORDER = '+';
  const SPACE = ' ';
  const MARGIN = 2;
  const SEPARATOR = '|';

  const properties = Object.keys(data[0]);

  const propertiesMaxLength = properties.map(property => {
    const propertyLength = `${property}`.length;
    return Math.max(propertyLength, ...data.map(item => `${item[property]}`.length));
  });

  const thead = `${BORDER}${properties
    .map((property, index) => {
      return `${LINE.repeat(propertiesMaxLength[index] + MARGIN)}`;
    })
    .join(BORDER)}${BORDER}`;

  const tbody = `${SEPARATOR}${properties
    .map(
      (property, index) =>
        `${SPACE}${property.charAt(0).toUpperCase() + property.slice(1)}${SPACE.repeat(
          propertiesMaxLength[index] - property.length,
        )}${SPACE}`,
    )
    .join(SEPARATOR)}${SEPARATOR}`;

  const tableProperty = data
    .map(item => {
      return properties
        .map((property, index) => {
          const value = `${item[property]}`;
          return `${SPACE}${value}${SPACE.repeat(
            propertiesMaxLength[index] - value.length,
          )}${SPACE}`;
        })
        .join(SEPARATOR);
    })
    .map(value => `${SEPARATOR}${value}${SEPARATOR}`);

  return thead + '\n' + tbody + '\n' + thead + '\n' + tableProperty.join('\n') + '\n' + thead;
}
console.log(
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' },
  ]),
);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
  ]),
);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
