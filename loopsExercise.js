//Prob 1
for (let index = 0; index < 20; index++) {
  const numbersAdd = index + 1;
  console.log(numbersAdd);
}

// prob.2

var i = 15;
for (let index = 1; index <= i; index++) {
  console.log(" there are " + index + " of beer on the wall");
}

// prob. 3

for (let index = 0; index < 20; index++) {
  if (index % 2 == 0) console.log(index + "even");
  else console.log(index + 1 + "odd");
}

// prob.4
for (let index = 0; index < 10; index++) {
  const multiplicationTable = (index + 1) * 9;
  console.log(multiplicationTable);
}

// Prob 5
const grade = [90, 60, 77, 81, 65];
const studentName = ["John", "Tom", "Jane", "Maria", "Carl"];

for (let index = 0; index < grade.length; index++) {
  let studentGrade;

  if (grade[index] < 60) {
    studentGrade = "F";
  } else if (grade[index] < 70) {
    studentGrade = "D";
  } else if (grade[index] < 80) {
    studentGrade = "C";
  } else if (grade[index] < 90) {
    studentGrade = "B";
  } else {
    studentGrade = "A";
  }

  console.log(studentName[index] + " is a " + studentGrade);
}

// Prob 6

for (let index = 0; index < 10; index++) {
  let toPrint = "";

  if (index % 3 == 0) {
    toPrint = "Fizz";
  } else if (index % 5 == 0) {
    toPrint = "Buzz";
  }
  console.log(index + "" + toPrint);
}

// Prob 7
let result = 0;

for (let index = 0; index < 1000; index++) {
  if (index % 3 == 0) {
    result = result + index;
  } else if (index % 5 == 0) {
    result = result + index;
  }
}

console.log(result);

// prob. 8

let friends = ["sara", "lara", "clara", "dhara", "peau", "rory"];
let greets = "";

for (let index = 0; index < friends.length; index++) {
  const greets = "Hello " + friends[index];

  console.log(greets);
}

//Prob. 9

let firstArray;
let secondArray;
let thirdArray;
let fourthArray;
let index;
for (let index = 100; index < 1100; index = index + 100) {
  const firstArray = index;
  console.log(firstArray);
}

for (let index = 1; index < 130; index = index * 2) {
  const secondArray = index;
  console.log(secondArray);
}

for (let index = 0; index < 11; index = index + 2) {
  const thirdArray = index;
  console.log(thirdArray);
}

for (let index = 10; index >= 0; index--) {
  const fourthArray = index;
  console.log(fourthArray);
}

console.log([firstArray] + [secondArray] + [thirdArray] + [fourthArray]);
