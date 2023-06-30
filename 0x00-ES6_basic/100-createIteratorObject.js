export default function createIteratorObject(report) {
	const nameList = [];
	for (const key of Object.keys(report)){
		for (const name of report.key){
			nameList.push(name);
		}
	}
	return nameList;
}
