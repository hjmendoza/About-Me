'use strict';

var userPoints = 0;

console.log('Lab 2 - About Me');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! I am going to ask you a total of 7 questions about me, Haley. Please answer each question using yes or no. Try to get them all right!');

var answer1 = prompt('Is Haley from California?').toLowerCase();

console.log('User input - from California?:' + answer1);

if (answer1 === 'yes' || answer1 === 'y'){
  //if it's correct, give them a point
  userPoints++;
  alert('Correct! I am from San Diego.');
} else{
  //if it's not correct, tell them to try again
  alert('Incorrect! I am from San Diego.');
}


var answer2 = prompt('Is Haley an only child?').toLowerCase();

console.log('User input - only child?:' + answer2);

if (answer2 === 'no' || answer2 === 'n'){
  userPoints++;
  alert('Correct! I have many siblings.');
} else{
  alert('Incorrect! I have many siblings.');
}


var answer3 = prompt('Does Haley work full-time?').toLowerCase();

console.log('User input - work fulltime?:' + answer3);

if (answer3 === 'yes' || answer3 === 'y'){
  //if it's correct, give them a point
  alert('Correct! I work weekdays 8:30am - 4:30pm.');
} else{
  //if it's not correct, tell them to try again
  alert('Incorrect! I work weekdays 8:30am - 4:30pm.');
}


var answer4 = prompt('Does Haley have pets?').toLowerCase();

console.log('User input - have pets?:' + answer4);

if (answer4 === 'yes' || answer4 === 'y'){
  //if it's correct, give them a point
  userPoints++;
  alert('Correct! I have two cats.');
} else{
  //if it's not correct, tell them to try again
  alert('Incorrect! I have two cats.');
}

var answer5 = prompt('Does Haley have prior experience in coding?').toLowerCase();

console.log('User input - experience in coding?:' + answer5);

if (answer5 === 'no' || answer5 === 'n') {
  //if it's correct, give them a point
  userPoints++;
  alert('Correct! I do not but I\'m learning more everyday!');
} else {
  //if it's not correct, tell them to try again
  alert('Incorrect! I am only a beginnier but I\'m learning more everyday!');
}


// var answer6 = prompt('How many siblings does Haley have? You have 4 tries to get the answer correct.', 'Please enter a number 0-10');

// console.log('User sibling guess: ' + answer6);

var userSiblingGuess = 4;

do{
  var answer6 = prompt('How many siblings does Haley have? You have ' + userSiblingGuess + ' tries to get the answer correct.', 'Please enter a number 0-10');
  console.log('userSiblingGuess #' + userSiblingGuess + ': ' + answer6);
  if (answer6 > 6){
    alert('Nice try. That number is too high!');
    userSiblingGuess--;
  } else if (answer6 < 6){
    alert('Nice try. That number is too low!');
    userSiblingGuess--;
  } else if (answer6 == 6){
    alert('Correct! I have 6 siblings.');
    break;
  }
}while (userSiblingGuess >= 1);


if(userSiblingGuess === 0){
  alert('Good guesses. I have 6 siblings.');
}

// var favoriteCandies = ['starbursts', 'skittles', 'kitkat', 'sour patch kids'];

// var candyGuess = 6;

// do{
//   var answer7 = prompt('Last question! Can you guess one of my favorite candies? You have ' + candyGuess + ' tries to get the answer correct.');
//   console.log('Candy guess # ' + candyGuess + ':' + answer7);
// for(var i = 0; i < favoriteCandies.length; i++){
//   if (answer7 !== favoriteCandies[i]){
//     alert('Nice try!');
//     candyGuess--
//   } else if (answer7 == favoriteCandies[i]){
//     alert('Great guess! My favorite candies are starburts, skittles, kitkat, and sour patch kids!');
//     break;
//   }
// }while (candyGuess >= 1);
// }



//alert('Great job, ' + user + '. You got ' + userPoints + ' out of 7 questions correct.');