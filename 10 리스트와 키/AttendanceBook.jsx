import React from "react";

const studnets = [
  {
    name: "sse",
  },
  {
    name: "prk",
  },
  {
    name: "lhg",
  },
  {
    name: "ngj",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;
