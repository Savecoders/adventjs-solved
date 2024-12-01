function manufacture(gifts, material) {
  return gifts.filter((gift) =>
    gift.split("").every((matt) => material.includes(matt))
  );
}
