export default function concat(ori, target) {
  if (target === undefined || !target.length) {
    return ori;
  }

  return ori.concat(target);
}
