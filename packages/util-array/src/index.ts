export function copy(arr: any[], mapFn: (any)) {
  return Array.from(arr, mapFn);
}
