//Prob 1
let sum = 0;

for (let index = 0; index < 20; index++) {
  const numberToAdd = index + 1;

  sum = sum + numberToAdd;
}
console.log(sum);

// prob.2

var i = 15;
for (let index = 1; index <= i; index++) {
  let bottleOrBottles = "bottle";
  let isOrAre = "is";

  if (index > 1) {
    isOrAre = "are";
  }

  if (index > 1) {
    bottleOrBottles = "bottles";
  }

  console.log(
    " There" +
      " " +
      isOrAre +
      " " +
      index +
      " " +
      bottleOrBottles +
      " of beer on the wall"
  );
}
// prob. 3

for (let index = 0; index < 20; index++) {
  if (index % 2 == 0) console.log(index + " is even");
  else console.log(index + 1 + " is odd");
}

// prob.4

for (let index = 0; index < 10; index++) {
  let result = (index + 1) * 9;
  console.log(index + 1 + " * 9 = " + result);
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

for (let index = 0; index < 100; index++) {
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
/*

// prob. 11
var isPalindrome = "madam";



for (let index = isPalindrome.length; index < 0; index--) {
  
if (isPalindrome )



*/
