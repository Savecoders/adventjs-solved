function getCompleted(timeWorked: string, totalTime: string): string {
  const [workedHours, workedMinutes, workedSeconds] = timeWorked.split(':').map(Number);
  const [totalHours, totalMinutes, totalSeconds] = totalTime.split(':').map(Number);

  const timePart = workedHours * 3600 + workedMinutes * 60 + workedSeconds;
  const timeTotal = totalHours * 3600 + totalMinutes * 60 + totalSeconds;

  const percentage = Math.round((timePart / timeTotal) * 100);

  return `${percentage}%`;
}
