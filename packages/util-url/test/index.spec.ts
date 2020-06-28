import { isvalidUrl, getQueryParamValue, removeURLParameter } from '../src/';

test('url - isvalidUrl fn is defined', () => {
  expect(isvalidUrl).toBeDefined();
})

test('url - getQueryParamValue fn is defined', () => {
  expect(getQueryParamValue).toBeDefined();
})

test('url - removeURLParameter fn is defined', () => {
  expect(removeURLParameter).toBeDefined();
})
