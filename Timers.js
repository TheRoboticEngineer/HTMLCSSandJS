// Write a function called countdown that accepts a number as a parameter 
//and every 1000 milliseconds decrements the value and console.logs it.
// Once the value is 0 it should log “DONE!” and stop.
let timer; // Sets timer variable 
function countdown(number){
    timer = setInterval(function() // Set intervals for the function for 1000 ms = 1s 
    {
    while (number > 0){ // Chose to use a while loop to iterate through rather than a if loop
        console.log(number); 
        number --;
    }
    if (number <= 0){
        clearInterval(timer)
    }
    console.log('done'); // Have to give the console something to do when this is done, keeps putting out done (?)
    },1000);
}   

countdown(5) // Run that shit and check

// Random Game

// function randomGame() { // Created a function called random game, set with no arguments since it will generate its own 
//     let counter = 0; // Initialize the counter to 0

//     const intervalTimer = setInterval(function() { //Since the interval is going to be constant at 1s, I chose to use a const variable here
//     const randomNumber = Math.random(); 
//     counter ++;
//     if (randomNumber > 0.75){ // I actually wrote the if loop first because it was going to be the trickiest to get right
//         console.log(`It took ${counter} tries to find a number greater than 0.75.` ); // Trying to implement more template literals in mu outputs
//         clearInterval(intervalTimer); // Found the clear interval function from MDN, much easier than trying to manually reset from 0
//     }
//     }, 1000); // Time goes here (write in milliseconds; got errors before)
// }
   
// randomGame(); // Since the function generates a random number, no arguments go here.
// When tested in the console, you won't see anything but the resulting statement. I used console.logs beforehand to test lines of code :)