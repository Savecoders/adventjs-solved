function organizeChristmasDinner(dishes: string[][]): string[][] {
  const ingredients = new Map<string, string[]>();
  for (const dish of dishes) {
    const [dishName, ...ingredientsList] = dish;
    for (const ingredient of ingredientsList) {
      if (ingredients.has(ingredient)) {
        ingredients.get(ingredient)?.push(dishName);
      } else {
        ingredients.set(ingredient, [dishName]);
      }
    }
  }
  const result = Array.from(ingredients.entries());
  result.sort((a, b) => a[0].localeCompare(b[0]));
  const valid = result.filter(([, dishes]) => dishes.length > 1);
  return valid.map(([ingredient, dishes]) => [ingredient, ...dishes.sort()]);
}
