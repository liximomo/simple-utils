export default function fill(array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] = value;
  }
  return array;
}
