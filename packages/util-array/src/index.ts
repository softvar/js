export function copy(arr: Array<any>, mapFn: (any)) {
  return Array.from(arr, mapFn);
}
