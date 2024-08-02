interface Student{
	firstName: string,
	lastName:string,
	age:number,
	location:string, 
}
const student1:Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "New York"
}
const student2:Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 22,
	location: "Los Angeles"
}
const studentsList: Student[] = [student1, student2];
// Creating the Table and Table Body Tags
const table = document.createElement('table');
const tBody = document.createElement('tbody');

studentsList.forEach((student) => {
	const row = tBody.insertRow();
	// inserts the cell at position 0 (the first cell in the row)
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);
	cell1.textContent = student.firstName;
	cell2.textContent = student.location;

})
// Appending the Table Body to the Table
table.appendChild(tBody);
// Adding the Table to the Document Body
document.body.appendChild(table);
