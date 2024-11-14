// Declared variables to represent student information
let studentName= "Alice";
let studentAge = 15;
let studentGrade = 10;
let isPresent = true;

console.log("Student: " + studentName);
console.log("Age: " + studentAge);
console.log("Grade: " + studentGrade);
console.log("Is Present " + isPresent);

// Exploring Javascript Operators
// Task 1: Declare variables to store two numeric values for performing arithmetic operations
let num1 = 34;
let num2 = 76;

// Task 2: Assign sample numeric values to the variables declared in Task 1
// (Already done in the lines above)

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results
let sum = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", subtract);
console.log("Product:", multiply);
console.log("Quotient:", quotient);

// Task 4: Explore assignment operators and update the values of variables
num1 += 5;  // Adds 5 to num1
num2 *= 2;  // Multiplies num2 by 2
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators to compare the values of variables
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Task 6: Apply logical operators to combine conditions and display the results
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);

