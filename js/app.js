'use strict';

alert('Do you think the following statements are correct? \n Answer by typing (yes/y) or (no/n)');
let score = 0;

let ocean = prompt('The ocean is blue');
if (ocean.toLowerCase() === 'yes' || ocean.toLowerCase() === 'y'){
  alert('You are right!');
  score++;
  // console.log('You are right! The ocean is blue');
}else{
  alert('You are wrong!');
}

let smart = prompt('I\'m smarter than you');
if (smart.toLowerCase() === 'yes' || smart.toLowerCase() === 'y'){
  alert('You are right!');
  score++;
  // console.log('You are right! I\'m smarter than you');
}else{
  alert('You are wrong!');
}

let place = prompt('I live in Jordan');
if (place.toLowerCase() === 'yes' || place.toLowerCase() === 'y'){
  alert('You are right!');
  score++;
  // console.log('You are right! I live in Jordan');
}else{
  alert('You are wrong!');
}

let lang = prompt('I can speak English');
if (lang.toLowerCase() === 'yes' || lang.toLowerCase() === 'y'){
  alert('You are right!');
  score++;
  // console.log('You are right! I can speak English');
}else{
  alert('You are wrong!');
}

let prolang = prompt('I created this webpage using HTML');
if (prolang.toLowerCase() === 'yes' || prolang.toLowerCase() === 'y'){
  alert('You are right!');
  score++;
  // console.log('You are right! I created this webpage using HTML');
}else{
  alert('You are wrong!');
}
let guess = prompt('Guess a number between 0 and 100 \n You only have 4 attemps, use them wisely!');
console.log('Guessing a number between 0 and 100');
let number = [];
number.push(guess);

for (let i=0; i<3 ; i++){
  if (number[i] == 50){
    break;
  }else if(number[i] > 50){
    alert('Too high');

  }else if (number[i] < 50){
    alert('Too low');
  }
  guess =prompt('Try another number between 0 and 100');
  number.push(guess);
}

if (number[number.length-1] == 50){
  alert('Congrats! You got it right :D ');
  score++;
} else if (number[number.length-1] < 50){
  alert('Your answer is Too low! The correct answer was 50 \n I told you I\'m smarter than you ');
}else {
  alert('Your answer is Too high! The correct answer was 50 \n I told you I\'m smarter than you ');
}


let answer = 'None';
let drinks = ['tea','coffee','water'];
let count = 6;
console.log('What are my favorite drinks?');
for (let j=0 ; j<6 ; j++){
  let gues = prompt('Can you guess one of my favorite drinks?\n You have '+count+' attempts left.');
  count--;

  for (let i=0; i<4 ; i++){
    if (gues === drinks[i]){
      alert('Wow!! You got it right!');
      answer = 'right';
      score++;
      break;
    }
  }

  if (answer==='right'){
    break;
  }

}
alert('My favorite drinks are: '+drinks);
alert('Your final score is '+score+' out of 7!');

let name= prompt('What\'s your name?');

alert('Your name is '+ name + '!');
document.write('Hello '+ name + '! and welcome to my web page');

