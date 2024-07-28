// main.ts
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Chris",
    lastName: "Adams",
    age: 20,
    location: "Nigeria"
  };
  
  const student2: Student = {
    firstName: "Titi",
    lastName: "Adewuni",
    age: 22,
    location: "Ghana"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable(students: Student[]) {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    const headers = ["First Name", "Location"];
  
    headers.forEach(headerText => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
  
    students.forEach(student => {
      const row = table.insertRow();
      const firstNameCell = row.insertCell();
      const locationCell = row.insertCell();
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
    });
  
    document.body.appendChild(table);
  }
  
  // Render the table when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => renderTable(studentsList));
  