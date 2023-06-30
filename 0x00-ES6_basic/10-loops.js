export default function appendToEachArrayValue(array, appendString) {
	const transfArray = [];
	for (const value of array) {
		transfArray.push(appendString + value);
  }

  return transfArray;
}
