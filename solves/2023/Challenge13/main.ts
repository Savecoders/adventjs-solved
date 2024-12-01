function calculateTime(deliveries: string[]) {
  const symbol = { true: "-", false: "" };
  // 7hrs
  let time = 7 * 3600;

  deliveries.forEach((delivery) => {
    const [hour, minute, second] = delivery.split(":");
    time += -(+hour * 3600) - +minute * 60 - +second;
  });

  const isLess: true | false = time > 0;

  time = Math.abs(time);

  const second = time % 60;
  const minutes = Math.trunc(time / 60) % 60;
  const hours = (Math.trunc(time / 60) - minutes) / 60;

  return (
    symbol[isLess] +
    `${hours}`.padStart(2, "0") +
    ":" +
    `${minutes}`.padStart(2, "0") +
    ":" +
    `${second}`.padStart(2, "0")
  );
}
