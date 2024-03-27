export function wrap(value: number, max: number, min: number = 0) {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
}
