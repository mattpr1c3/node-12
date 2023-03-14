// WRITE YOUR CODE HERE
let student_list = ["Andre", "Karl", "Rashida", "Olivia"]

console.log(student_list.length);

console.log("Welcome to the class " + student_list[0]);
console.log("Welcome to the class " + student_list[1]);
console.log("Welcome to the class " + student_list[2]);
console.log("Welcome to the class " + student_list[3]);

student_list[0] = "Jeff";

if (student_list[0] === "Jeff") {
    console.log("Jeff is in class")
}