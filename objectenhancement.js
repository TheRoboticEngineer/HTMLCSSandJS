// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

var favoriteNumber = 42;
var instructor1 = {
    firstName: 'Colt',
    [favoriteNumber] : "That is my favorite!"
}

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }


const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

//   Write a function which generates an animal object. 
//  The function should accepts 3 arguments:

//   species: the species of animal (‘cat’, ‘dog’)
//   verb: a string used to name a function (‘bark’, ‘bleet’)
//   noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
//   Use one or more of the object enhancements we’ve covered.

const puppy = createAnimal("dog", "bark", "Woof!")
// {species: "dog", bark: ƒ}
puppy.bark()  //"Woooof!"

const chicken = createAnimal("chicken", "tweet", "twittwit")
// {species: "sheep", bleet: ƒ}
chicken.tweet() // "twittwit"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}