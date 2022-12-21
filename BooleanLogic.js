// Part I
// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.
// 2 == “2”; Checks to see if these are the same value but NOT type; true
// 2 === 2; Checks for same value and type; true
// 10 % 3; divides 10 by 3 and prints the remainder so in this case 1
// 10 % 3 === 1; True, expected output
// true && false; both sides must be true to come out true; false output expected
// false || true; checks to see if statement is true if and only if one more of its operands are true, returns value of one of the specified operands. Expected output of true
// true || false; same thing, just reversed. Expected output of true\

// Part II
// let isLearning = true;
// if(isLearning){
//   console.log("Keep it up!");
// } else {
//   console.log("Pretty sure you are learning....");
// }

// What should the above code console.log? It should print "Keep it up"
// Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own? Because every value has inherit truth or falsy values, and isLearning is not one of the indicated false values in JS

// let firstVariable;
// let secondVariable = "";
// let thirdVariable = 1;
// let secretMessage = "Shh!";

// if(firstVariable){
//   console.log("first");
// } else if(firstVariable || secondVariable){
//   console.log("second");
// } else if(firstVariable || thirdVariable){
//   console.log("third");
// } else {
//   console.log("fourth");
// }

// What should the above code console.log? Why? Third because the thirdVariable is truthy.
// What is the value of firstVariable when it is initialized? undefined
// Is the value of firstVariable a “truthy” value? Why? No, because undefined is inherently false in JS
// Is the value of secondVariable a “truthy” value? Why? No because an empty string is also a false value
// Is the value of thirdVariable a “truthy” value? Why? Yes, because it is not one of the indicated false values; all numbers EXCEPT 0 are truthy

// Part III
if (Math.random() > 0.5){
    console.log("Over 0.5");
} else {
    console.log ("Under 0.5");
}

// What is a falsey value? Name all of them in JS
// A falsey value is a value that evaluates to false when inside of a conditional statement (if, else if, case). 
// The falsey values in JS are 0, “”, false, null, undefined and NaN. These will ALWAYS be seen as false.