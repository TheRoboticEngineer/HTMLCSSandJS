//Please refer to the following array for these questions:
let people = ["Greg", "Mary", "Devon", "James"];
// Write the command to remove “Greg” from the array.
people.shift()
// Write the command to remove “James” from the array.
people.pop()
// Write the command to add “Matt” to the front of the array.
people.unshift("Matt")
// Write the command to add your name to the end of the array.
people.push("sam")
// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
let SmallGroup = people.slice(2)
// Write the command that gives the indexOf where “Mary” is located.
people.indexOf('Mary')
// Write the command that gives the indexOf where “Foo” is located (this should return -1).
people.indexOf('Foo')
// Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
let persons = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Artie")
// Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.
let withBob = people.concat("Bob")


