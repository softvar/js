import { getRandomNumber, getRandomNumberBetween } from '../src'

test('number - getRandomNumber, getRandomNumberBetween are defined', () => {
  expect(getRandomNumber).toBeDefined();
  expect(getRandomNumberBetween).toBeDefined();
})
