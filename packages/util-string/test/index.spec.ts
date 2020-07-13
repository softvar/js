import { lower, upper, camelCase, fixEs6LiteralSpacing } from '../src'

test('string - methods are defined', () => {
  expect(lower).toBeDefined();
  expect(upper).toBeDefined();
  expect(camelCase).toBeDefined();
  expect(fixEs6LiteralSpacing).toBeDefined();
})
