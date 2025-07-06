// // ==============================
// // Chapter 1: Alerts
// // ==============================
// alert("Welcome to JavaScript!");


// // ==============================
// // Chapter 2: Variables for Strings
// // ==============================
// let greeting = "Hello, user!";
// alert(greeting);


// // ==============================
// // Chapter 3: Variables for Numbers
// // ==============================
// let userAge = 20; // replace with your age
// let futureAge = userAge + 5;
// console.log("Future age: " + futureAge);


// // ==============================
// // Chapter 4: Variable Names Legal and Illegal
// // ==============================
// // Valid variable names:
// let userName = "Alex";
// let user_age = 25;
// let $status = "online";

// // Invalid variable names:
// // let 1name = "John";    // Can't start with a number
// // let user-name = "Mike"; // Hyphens are not allowed
// // let var = "Hello";     // 'var' is a reserved keyword


// // ==============================
// // Chapter 5: Math Expressions – Familiar Operators
// // ==============================
// let a = 8, b = 2;
// alert("Addition: " + (a + b));
// alert("Subtraction: " + (a - b));
// alert("Multiplication: " + (a * b));
// alert("Division: " + (a / b));
// alert("Modulus: " + (a % b));


// // ==============================
// // Chapter 6: Math Expressions – Unfamiliar Operators
// // ==============================
// let num = 10;
// num++;
// alert("After num++: " + num);
// --num;
// alert("After --num: " + num);


// // ==============================
// // Chapter 7: Eliminating Ambiguity
// // ==============================
// let result1 = 2 + 3 * 4;
// let result2 = (2 + 3) * 4;
// console.log("Without parentheses: " + result1); // 14
// console.log("With parentheses: " + result2);    // 20


// // ==============================
// // Chapter 8: Concatenating Text Strings
// // ==============================
// let userName = "Alex";
// let welcomeMessage = "Hello, " + userName + "!";
// alert(welcomeMessage);


// // ==============================
// // Chapter 9: Prompts
// // ==============================
// let nameInput = prompt("Enter your name:");
// alert("Hello, " + nameInput + "!");


// // ==============================
// // Chapter 10: if Statements
// // ==============================
// let password = prompt("Enter password:");
// if (password === "letmein") {
//   alert("Access granted");
// }


// // ==============================
// // Chapter 11: Comparison Operators
// // ==============================
// let x = 10, y = 20;
// alert("x > y: " + (x > y));
// alert("x < y: " + (x < y));
// alert("x === y: " + (x === y));
// alert("x !== y: " + (x !== y));


// // ==============================
// // Chapter 12: if...else and else if
// // ==============================
// let guess = +prompt("Guess the number (1-10):");
// let secret = 7;
// if (guess < secret) {
//   alert("Too low");
// } else if (guess > secret) {
//   alert("Too high");
// } else {
//   alert("Correct!");
// }


// // ==============================
// // Chapter 13: Testing Sets of Conditions
// // ==============================
// let age = +prompt("Enter your age:");
// let hasID = prompt("Do you have a valid ID? (yes/no)");
// if (age > 18 && hasID.toLowerCase() === "yes") {
//   alert("You may enter");
// }


// // ==============================
// // Chapter 14: if Statements Nested
// // ==============================
// let inputUser = prompt("Enter username:");
// let inputPass = prompt("Enter password:");
// if (inputUser === "admin") {
//   if (inputPass === "12345") {
//     alert("Login successful");
//   } else {
//     alert("Incorrect password");
//   }
// } else {
//   alert("Unknown username");
// }


// // ==============================
// // Chapter 15: Arrays
// // ==============================
// let fruits = ["apple", "banana", "mango", "orange", "grape"];
// alert("Third fruit: " + fruits[2]);


// // ==============================
// // Chapter 16: Adding and Removing Elements
// // ==============================
// fruits.push("kiwi");   // Add to end
// fruits.shift();        // Remove first
// console.log(fruits);


// // ==============================
// // Chapter 17: splice()
//  // ==============================
// fruits.splice(1, 1, "peach", "plum"); // Remove 1 item at index 1 and add peach, plum
// console.log(fruits);


// // ==============================
// // Chapter 18: for Loops
// // ==============================
// for (let i = 0; i < fruits.length; i++) {
//   alert(fruits[i]);
// }


// // ==============================
// // Chapter 19: for Loops with Flag
// // ==============================
// let searchFruit = prompt("Enter a fruit name:");
// let found = false;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].toLowerCase() === searchFruit.toLowerCase()) {
//     found = true;
//     break;
//   }
// }
// alert(found ? "Found" : "Not found");


// // ==============================
// // Chapter 20: Nested for Loops
// // ==============================
// let firstNames = ["Cool", "Fast", "Big"];
// let lastNames = ["Bear", "Tiger", "Lion"];

// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     console.log(firstNames[i] + " " + lastNames[j]);
//   }
// }
