// Goals for this assignment:
// Clicking a card should change the background color to be the color of the class it has.
// Users should only be able to change at most two cards at a time.
// Clicking on two matching cards should be a “match” — those cards should stay face up.
// When clicking two cards that are not a match, they should stay turned over for at least 1 second before they hide the color again. You should make sure to use a setTimeout so that you can execute code after one second.

// Comments: read through source code (actually understood that shit)
// 1/09: Wrote down rough idea of what the hell I needed to even code out
// 1/10: Reviewed source code (needed to use a TA to read through the JS)
// 1/11: Started making the event listeners for clicks, can't figure out how to stop the user from clicking on the same cards again
// 1/12 : Depressed, no work done
// 1/13: After ALOT of Google, Stack Overflow, and Youtube, finally got this bullshit working. It's not cute, but it's functional, moving on :)

const gameContainer = document.getElementById("game"); // Selects the div created in the accompanying HTML file
let guess1 = null;
let guess2 = null;
let cardsFlipped = 0;
let FalseClick = false;

const COLORS = [ 
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function! --> TODID!
function handleCardClick(e) { // Added event listener for clicks
  if (FalseClick) return; // 
  if (e.target.classList.contains("flipped")) return;

  let currentCard = e.target; // For every card selected 
  currentCard.style.backgroundColor = currentCard.classList[0]; // Add some random ass background color located at index 0

  if (!guess1 || !guess2) { // Sets up loop for guesses 
    currentCard.classList.add("flipped"); // Needed to add a class called flipped to keep track of flipped cards
    guess1 = guess1 || currentCard; // Checking for a match or not 
    guess2 = currentCard === guess1 ? null : currentCard;
  }

  if (guess1 && guess2) {
    FalseClick = true;
    // TA told me to add this line, but unsure what it really does, so let's break it down
    let gif1 = guess1.className; // Saved the guesses with their class names to new vars
    let gif2 = guess2.className;

    if (gif1 === gif2) { //Used strict equality because they need to be exact matches 
      cardsFlipped += 2; // Looks for two cards that are flipped
      guess1.removeEventListener("click", handleCardClick); // If they match, remove the event listener (this solves the issue of 
      // making sure that you cannot click either card again)
      guess2.removeEventListener("click", handleCardClick);
      guess1 = null; // I used to have a reset() functio here but it was wonku, decided to just push the values back to null
      guess2 = null;
      FalseClick = false; // Resets click
    } else {
      setTimeout(function() { // Timer function added so user can see card for 1 second before its flipped back over 
        guess1.style.backgroundColor = "";
        guess2.style.backgroundColor = "";
        guess1.classList.remove("flipped");
        guess2.classList.remove("flipped");
        guess1 = null;
        guess2 = null;
        FalseClick = false;
      }, 1000);
    }
  }

  if (cardsFlipped === COLORS.length) alert("GAME OVER!"); // There should only be as many cards as there are colors so this should signify game over
}



// when the DOM loads
createDivsForColors(shuffledColors);

/* */
