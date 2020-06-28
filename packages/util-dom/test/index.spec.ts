import { isDynamicClass, isDynamicId } from '../src/';

test('dom - isDynamicClass fn is defined', () => {
  expect(isDynamicClass).toBeDefined();
});

test('dom - isDynamicId fn is defined', () => {
  expect(isDynamicId).toBeDefined();
});
