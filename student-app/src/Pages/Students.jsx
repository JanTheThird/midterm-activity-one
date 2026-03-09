import { useState, useEffect } from "react";
import StudentList from "../Components/StudentList";

function Students() {

  const [students, setStudents] = useState([]);

  const studentData = [
    { id:1, name:"Juan Cruz", course:"BSIT" },
    { id:2, name:"Maria Santos", course:"BSCS" },
    { id:3, name:"Pedro Reyes", course:"BSIT" },
    { id:4, name:"Ana Lopez", course:"BSIS" },
    { id:5, name:"Carlo Ramos", course:"BSCS" },
    { id:6, name:"Liza Gomez", course:"BSIT" },
    { id:7, name:"Mark Tan", course:"BSIS" },
    { id:8, name:"Nina Cruz", course:"BSCS" },
    { id:9, name:"Paul Lim", course:"BSIT" },
    { id:10, name:"Sarah Yu", course:"BSCS" }
  ];

  useEffect(() => {
    setStudents(studentData);
  }, []);

  return (
<div>
      <h2>Student List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <StudentList key={student.id} student={student} />
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Students;