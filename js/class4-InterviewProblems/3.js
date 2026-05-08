const students = [
  { name: "Aziz", score: 92 },
  { name: "Amit", score: 80 },
  { name: "Tushar", score: 60 },
  { name: "Saadiq", score: 98 },
  { name: "Aman", score: 10 },
];

// Grade Chart
// "A" -> 90-100
// "B" -> 75-89
// "C" -> below 75

// Output
// {
//    A: ["Aziz", "Saadiq"],
//    B: ["Amit"],
//    C: ["Tushar", "Aman"]
// }

function studentGrading(studentList) {
  // Write your code here
  const result = {
    A: [],
    B: [],
    C: [],
  };

  for (let index = 0; index < studentList.length; index++) {
    if (studentList[index].score >= 90 && studentList[index].score <= 100) {
      result.A.push(studentList[index].name);
    } else if (studentList[index].score >= 75) {
      result.B.push(studentList[index].name);
    } else {
      result.C.push(studentList[index].name);
    }
  }

  return result;
}

console.log(studentGrading(students));
