export default function cleanSet(set, startString) {
  if (startString === '') {
    return [].join('-');
  }

  const startStringArray = Array.from(set).filter((item) => item.match(startString));
  return startStringArray.map((item) => item.replace(startString, '')).join('-');
}
