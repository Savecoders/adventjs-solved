function getCompleted(part: string, total: string): string {
  const getDate = (data: string): number => {
    const [hh, mm, ss] = data
      .split(":")
      .map((date) => parseInt(date));

    // hours = Hour*60mm*60ss
    return (hh * 60 * 60) + (mm * 60) + ss;
  };

  const mcd = (div: number, subs: number): number =>
    subs === 0 ? div : mcd(subs, div % subs);

  const timePart = getDate(part);
  const timeTotal = getDate(total);
  const mcdTime = mcd(timeTotal, timePart);

  return `${(timePart / mcdTime)}/${(timeTotal / mcdTime)}`;
}

export { getCompleted };
