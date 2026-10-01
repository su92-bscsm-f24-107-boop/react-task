function StudentList() {
  const students = [
    {
      id: 1,
      name: "Ali",
      score: 85,
    },
    {
      id: 2,
      name: "Sara",
      score: 45,
    },
    {
      id: 3,
      name: "Ahmed",
      score: 70,
    },
    {
      id: 4,
      name: "Ayesha",
      score: 35,
    },
  ];

  return (
    <div style={{ margin: "30px" }}>
      <h2>Task 3: Student Results</h2>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            width: "300px",
          }}
        >
          <h3>{student.name}</h3>

          <p>Score: {student.score}</p>

          {student.score >= 50 ? (
            <p style={{ color: "green" }}>
              Pass
            </p>
          ) : (
            <p style={{ color: "red" }}>
              Fail
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;