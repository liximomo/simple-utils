export default function fill(array, value) {
  for (var i = 0; i < array.length; i++) {
    array[i] = value;
  }
  return array;
}