function printName(firstName, cb, cb2) {
  console.log(firstName);
  cb("Kumar");
    let age = cb2(26);
    
}

function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
    return age;
}

printName("Anil", printLastName, printAge);
