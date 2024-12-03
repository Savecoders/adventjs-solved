interface InventoryItem {
  name: string;
  quantity: number;
  category: string;
}

interface organizeItem {
  [key: string]: {
    [key: string]: number;
  };
}

function organizeInventory(inventory: InventoryItem[]) {
  const categories = {} as organizeItem;
  inventory.forEach(({ name, quantity, category }) => {
    categories[category] ??= {};
    categories[category][name] ??= 0;
    categories[category][name] += quantity;
  });
  return categories;
}

const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
];

console.log(organizeInventory(inventary));

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' },
];

console.log(organizeInventory(inventary2));
