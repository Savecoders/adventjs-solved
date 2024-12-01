function getFilesToBackup(
  lastBackup: number,
  changes: [number, number][],
): number[] {
  const changesLastBack = changes
    .filter(([, change]) => change > lastBackup)
    .map(([id, _]) => id);

  return [...new Set(changesLastBack)].sort((a, b) => a - b);
}

export { getFilesToBackup };
