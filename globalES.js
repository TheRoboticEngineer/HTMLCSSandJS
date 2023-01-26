// Given the followoing variable, rewrite this code in ES2015 standards
// var PI = 3.14;
// PI = 42; // stop me from doing this!

const PI = 3.14;
PI = 42;
console.log(PI) // gives out error which was expected

// Quiz
// What is the difference between var and let?
// Var can be reassigned values and redeclated and scopes a variable to function when defined inside the function. 
// Additionally, var will hoist to the top of the scope it is into --> be read first?
// Let is almost always locked into the function it is defined in, not accessible to outside code 
// Let also has to be written in block-code format (i.e a code block) and can only exist inside a code block. 
// Let cannot be redeclared, but it can be reassigned 

// What is the difference between var and const?
// Var allows programmers to reassign values and redeclare things. 
// Const is usually used when you do not want something redeclared or reassigned, such as math constants like pi.
// Also just like let, const has to be written in block-code formatiing.

// What is the difference between let and const?
// The primary difference is that const can never be redeclared or reassigned, while let can also not be redeclared, but can be reassinged

// What is hoisting?
// Hoisting is a the way that we explain how the JS compiler works. 
// Variables are lifted or “hoisted” to the top of the scope they are declared in.
//  When using var, you can access the variable name and it’s undefined value before it is used later on.
// Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.

//Edit: made changes to the description
