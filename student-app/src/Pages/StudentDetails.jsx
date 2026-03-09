import { useParams } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

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

  const student = studentData.find(s => s.id === parseInt(id));

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>
      <p>ID: {student.id}</p>
    </div>
  );
}

export default StudentDetails;