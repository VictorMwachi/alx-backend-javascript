export default function createIteratorObject(report) {
  return Object.values(Object.values(report)[0]).flat();
}
