import { Link } from "react-router-dom";

function StudentList({ student }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.course}</td>
      <td>
        <Link to={`/students/${student.id}`}>View</Link>
      </td>
    </tr>
  );
}

export default StudentList;