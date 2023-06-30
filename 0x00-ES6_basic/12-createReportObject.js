export default function createReportObject(employeesList) {
	const report = {
		allEmployees: [employeesList],
		getNumberOfDepartments(object){
			return [object].length;
		};
	};
}
