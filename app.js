'use strict';

var userPoints = 0;

console.log('Lab 2 - About Me');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! I am going to ask you a total of 5 questions about me, Haley. Please answer each question using yes or no. Try to get them all right!');

var answer1 = prompt('Is Haley from California?').toLowerCase();

console.log('User input - answer1:' + answer1); 

if (answer1 === 'yes' || answer1 === 'y'){
    //if it's correct, give them a point 
    userPoints++;
    alert('Correct! I am from San Diego.');
} else{
    //if it's not correct, tell them to try again
    alert('Incorrect! I am from San Diego.');
}
if (userPoints === 1){
    alert('You have ' + userPoints + ' point.');
}else{
    alert('You have ' + userPoints + ' points.');
}


var answer2 = prompt('Is Haley an only child?').toLowerCase();

console.log('User input - answer2:' + answer2);

if (answer2 === 'no' || answer2 === 'n'){
    userPoints++
    alert('Correct! I have 6 siblings.');
} else{
    alert('Incorrect! I have 6 siblings.');
}
if (userPoints === 1){
    alert('You have ' + userPoints + ' point.');
}else{
    alert('You have ' + userPoints + ' points.');
}

var answer3 = prompt('Does Haley work full-time?').toLowerCase();

console.log('User input - answer3:' + answer3); 

if (answer3 === 'yes' || answer3 === 'y'){
    //if it's correct, give them a point 
    userPoints++;
    alert('Correct! I work weekdays 8:30am - 4:30pm.')
} else{
    //if it's not correct, tell them to try again
    alert('Incorrect! I work weekdays 8:30am - 4:30pm.');
}
if (userPoints === 1){
    alert('You have ' + userPoints + ' point.');
}else{
    alert('You have ' + userPoints + ' points.');
}

var answer4 = prompt('Does Haley have pets?').toLowerCase();

console.log('User input - answer4:' + answer4); 

if (answer4 === 'yes' || answer4 === 'y'){
    //if it's correct, give them a point 
    userPoints++;
    alert('Correct! I have two cats.');
} else{
    //if it's not correct, tell them to try again
    alert('Incorrect! I have two cats.');
}
if (userPoints === 1){
    alert('You have ' + userPoints + ' point.');
}else{
    alert('You have ' + userPoints + ' points.');
}

var answer5 = prompt('Does Haley have prior experience in coding?').toLowerCase();

console.log('User input - answer5:' + answer5); 

if (answer5 === 'no' || answer5 === 'n'){
    //if it's correct, give them a point 
    userPoints++;
    alert('Correct! I do not but I\'m learning more everyday!');
} else{
    //if it's not correct, tell them to try again
    alert('Incorrect! I am only a beginnier but I\'m learning more everyday!.');
}
if (userPoints === 1){
    alert('You have ' + userPoints + ' point.');
}else{
    alert('You have ' + userPoints + ' points.');
}