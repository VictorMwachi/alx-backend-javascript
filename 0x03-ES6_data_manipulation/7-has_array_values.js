export default function hasValuesFromArray(set, array) {
  return array.forEach((arrayItem) => set.has(arrayItem));
}
