import { randomNumber } from './randomNumber';

export function randomRGB() {
  return `rgb(${randomNumber(0, 255)} ${randomNumber(0, 255)} ${randomNumber(0, 255)})`;
}
