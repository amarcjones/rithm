var name = "aj";
var dayOfBirth = '11181969';
//var color = prompt('What\'s your favorite color?');
//console.log(color + ' is a great choice...');
//console.log(typeof NaN);

function tester() {
  if(Math.random() > 0.5) {
  	console.log('Over 0.5')
  } else {
  	console.log('Under 0.5')
  }
}	

//tester();

//---------------------------------------------------------------
// JavaScript Arrays

var foodsArray = ['sushi', 'crab', 'lobster'];
//console.log(foodsArray[1]);
foodsArray.splice(foodsArray.length-1,1,'tacos');
//console.log(foodsArray);


var greekArray = ["alpha", "gamma", "delta"];
greekArray.splice(1,1,'beta', 'gamma');
//console.log(greekArray);


// Part I
// var arr = [];
// arr.push('AJ');
// arr.push('Jones')
// arr.unshift('green')
// arr.shift();

// arr2 = [];
// arr2.push(11);
// arr2.push('JavaScript');

//console.log(arr, arr2);

// Part II
// var arr = ['JavaScript', 'Python', 'Ruby', 'Java'];
// var arr2 = arr.splice(1,2);
// var arr3 = ['Haskell', 'Clojure'];
// var arr4 = arr.concat(arr3);
// var arr5 = arr4.splice(1,2, arr2);
// console.log(arr4);


// Array Exercises
// var people = ["Greg", "Mary", "Devon", "James"]; 

// for(var i = 0; i < people.length; i++) {
// 	console.log(people[i]);
// }

// people.shift();
// people.pop();
// people.unshift("Matt");
// people.push("AJ");
// console.log(people);

// for(var i = 0; i < people.length; i++) {
// console.log(people[i]);
//   if(people[i] === 'Mary') {
//   	break;
//   }	
// }

// console.log(people.slice(2,4));
// console.log(people.indexOf("Mary"));
// console.log(people.indexOf("Foo"));

// people = ["Greg", "Mary", "Devon", "James"];

// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// var withBob = people.concat('Bob');
// console.log(withBob);
// console.log(people);

//---------------------------------------------------------------
// Objects
// var myArray = {
// 	firstName: "AJ",
// 	lastName: "Jones",
// 	occupation: "Coder In Training"
// }

// console.log(myArray.firstName);
// console.log(myArray['lastName']);
// myArray.hobby = 'fishing';
// console.log(myArray);

// var namesAndHobbies = {
//     elie: "JavaScript",
//     matt: "jogging",
//     janey: "table building",
//     tim: "sailing"
// }

// for (var n in namesAndHobbies) {
// 	console.log(namesAndHobbies[n] + ' => ' + n);
// }

// namesAndHobbies.AJ = 'traveling';

// console.log(namesAndHobbies);

// if("AJ" in namesAndHobbies) {
// 	console.log('The AJ key exists here'); 
// }

// var programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };


// programming.languages.push("Go");
// programming.difficulty = 7;
// delete programming.jokes;
// programming.isFfun = true;

// console.log(programming);

// for ( var i = 0; i < programming.languages.length; i++ ) {
// 	console.log(programming.languages[i]);
// }

// for ( var n in programming ) {
// 	console.log(n);
// }

// for ( var n in programming ) {
// 	console.log(programming[n]);
// }


//---------------------------------------------------------------
// Functions

// function myName() {
//   return "AMJ";
// }

// var a = myName();
// console.log(a);

// var favoriteFoods = ['pizza', 'ice cream']

// input: array
// output: random item from array
// process: use Math.random to generate an index, return array element at index
// function randomFood(collection) {
//   //VARIABLES
//   var randomIndex;

//   //PROCESS
//   //math.random
//   randomIndex = Math.random()
//   //return array element at index
//   if(randomIndex > 0.5) {
//   	return collection[0];
//   }
//   return collection[1];
// }

// console.log(randomFood(favoriteFoods));


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNumbers(collection) {
  for (var i = 0; i < collection.length; i+=2) {
    console.log(collection[i]);  
  }
}

//oddNumbers(numbers);


function evenNumbers(collection) {
  for (var i = 1; i < collection.length; i+=2) {
    console.log(collection[i]);  
  }
}

//evenNumbers(numbers);


function returnFirstOddNumber(collection) {
  for( var i = 0; i < collection.length; i++ ) {
    if( collection[i] % 2 !== 0) {
    	return collection[i];
    }
  }
}

//console.log(returnFirstOddNumber(numbers));


function returnFirstEvenNumber(collection) {
  for( var i = 0; i < collection.length; i++ ) {
    if( collection[i] % 2 === 0) {
    	return collection[i];
    }
  }
}

//console.log(returnFirstEvenNumber(numbers));

// input: array
// output: first half of array
// process: splice, using length/2 and endpoint
function returnFirstHalf(collection) {
  return collection.slice(0, collection.length/2);
}

//console.log(returnFirstHalf(numbers));

// input: array
// output: second half of array
// process: splice, using collection.length/2 + 1 as starting point
function returnSecondHalf(collection) {
  return collection.slice(collection.length/2, collection.length);
}

//console.log(returnSecondHalf(numbers));


// function add(a,b) {
// 	return a + b;
// }

// function subtract(a, b) {
// 	return a - b;
// }

// function multiply(a, b) {
// 	return a * b;
// }

// function divide(a, b) {
// 	return a / b;
// }


// add(2,2); // 4
// subtract(2,2); // 0
// multiply(2,2); // 4
// divide(2,2); // 1


//---------------------------------------------------------------
//Anonymous Functions and IIFEs.
// (function(){
//     var person = "Elie";
//     console.log(person);
// })();


// var firstName = 'Elie'
// function sayHi(){
//     return 'Hi ' + firstName;
//     //firstName = 'Elie'
// }

// console.log(sayHi());


//Function Exercises

//input: two numbers
//output: the difference between the two numbers
//process: subtracton
function difference(a, b) {
	return a - b;
}


// input: two numbers
// output: the product of the two numbers
// process: multiplication
function product(a, b) {
	return a * b;
}


// input: a number from 1-7 - handle outliers
// output: the day of the week, corresponding to the number
// process:  return undefined for numbers out of range, use switch stament to convert number to day of week
function printDay(num) {
  if(num < 1 || num > 7) {
  	return undefined;
  } 
  switch (num) {
  	case 1:
      return 'Sunday';
      break;
    case 2:
      return 'Monday';
      break;
    case 3:
      return 'Tuesday';
      break;
    case 4:
      return 'Wednesday';
      break;
    case 5:
      return 'Thursday';
      break;
    case 6:
      return 'Friday';
      break;
    case 7:
      return 'Saturday';
  }

}


// input: an array
// output: the last value in the array - return undefined if array is empty
// process:  use length to get to last item in array
function lastElement(arr) {
  if(arr.length = 0) {
  	return undefined;
  }
  return arr[arr.length-1];
}


// input: two numbers
// output: identifies which number is greater, or if the numbers are equal
// process: if else if comparison
function numberCompare(num1, num2) {
  if( num1 === num2 ) {
  	return 'Numbers are equal';
  } else if ( num1 > num2 ) {
    return 'First is greater';
  } else {
  	return 'Second is greater';
  }
}


// input: two strings
// output: the number of times the letter appears in the string/word
//   
function singleLetterCount(string, letter) {
  // VARIABLES
  var counter = 0;
  var lowerLetter = letter.toLowerCase();
  var lowerString = string.toLowerCase();
  // process:  for loop thru all elements of string and compare if === to letter
  // function should be case insensitive - change both parameters to lowercase
  // if the letter is not found in the string/word, the function should return 0
  for ( var i = 0; i < lowerString.length; i++ ) {
    if( lowerString[i] === lowerLetter ) {
    	count++;
    }
  }
  return count;
}


// input: a string
// output: returns an object with the keys being the letters and the values being the count of the letter
function multipleLetterCount(string) {
  // VARIABLES
  var finalObject = {};
  var count = 0;

  // PROCESS
  // for loop thru each element in string, 
  // evaluate object property that is equal to each element - if key is undefined set key/value = to 1
  // else set value to ++
  for(var i = 0; i < string.length; i++) {
  	if(finalObject[string[i]] === undefined) {
      finalObject[string[i]] = 1;
  	} else {
  	  finalObject[string[i]]++;
    }
  }
  return finalObject;
}

//console.log(multipleLetterCount('testinggg'));


// input: four parameters (at most)
// output: a manipulated array
function arrayManipulation(array, command, location, value) {
  //VARIABLES

  //PROCESS
  if( command === 'remove' ) {
  	if( location === 'end' ) {
  		return array.pop();
  	} else if( location === 'beginning' ) {
  		return array.shift();
  	}
  } else if( command === 'add' ) {
    if( location === 'beginning' ) {
      return array.unshift(value);
    } else if( location === 'end' ) {
      return array.push(value);
    }
  }
}
// arrayManipulation([1,2,3], "remove", "end");

// input: one element
// output: boolean, that indicats whether or not element is palindrome
function isPalindrome(element) {
  //VARIABLES
  var finalResult = true;
  var lowerElement = element.toLowerCase();
  var reverseElement = lowerElement.split('').reverse().join('');
  console.log(reverseElement);

  //PROCESS
  //ignore white space - join element
  //case insensitive - change all letters to lowercase
  //split element into array, reverse sliced array, join reversed array into string 
  //loop thru orig and compare to reversed copy, return false if values don't match 
  for( var i = 0; i < lowerElement.length; i++ ) {
    if(lowerElement[i] !== reverseElement[i]) {
    	finalResult = false;
    }
  }
  return finalResult;
}

// var strr = 'tacocat';
// console.log(isPalindrome(strr));


//input: prompt result
//output: alert, letting player know the result of game
var playerSelection = prompt('What\'s it gonna be: rock, paper, or scissors?');
(function rockPaperScissors() {
  // VARIABLES
  var computerGeneratedResult = getRandomInt();
  // PROCESS
  // Create an IIFE
  // build helper functon to generate random number and assign value to 1-rock, 2-paper, and 3-scissors
  // call helper function and compare value to player prompt
  // return result of comparison via alert 
  if(computerGeneratedResult === playerSelection) {
  	alert('It\'s a tie.  You both chose ' + computerGeneratedResult);
    } 
    else if(playerSelection === 'rock') {
  	  if(computerGeneratedResult === 'paper') {
  	    alert('The computer wins: ' + computerGeneratedResult + ' covers ' + playerSelection);
  	  } else {
  	    alert('You win: ' + playerSelection + ' breaks ' + computerGeneratedResult);
      }
    } 
    else if(playerSelection === 'paper') {
  	  if(computerGeneratedResult === 'scissor') {
  	    alert('The computer wins: ' + computerGeneratedResult + ' cuts ' + playerSelection);
  	  } else {
  	    alert('You win: ' + playerSelection + ' covers ' + computerGeneratedResult);
      }
  	} 
  	else if(playerSelection === 'scissor') {
  	  if(computerGeneratedResult === 'rock') {
  	    alert('The computer wins: ' + computerGeneratedResult + ' breaks ' + playerSelection);
  	  } else {
  	    alert('You win: ' + playerSelection + ' cuts ' + computerGeneratedResult);
      }
  	} 
}) ();


function getRandomInt() {
  var min = 1;
  var max = 3;
  var result = '';
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  switch(randomNumber) {
  	case 1:
      result = 'rock';
      break;
    case 2:
      result = 'paper';
      break;
    case 3:
      result = 'scissor';
      break;
  }
  return result;
}



























