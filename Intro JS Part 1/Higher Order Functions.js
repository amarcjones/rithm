// Practice

// Let's try to write a function called each which accepts two parameters: an array and a callback function.  The each function should loop over the array passed to it and run the callback function on each element in it.

// input:  array and callback
// output:  the callback applied to each element of the array - actual output will be defined by the callback
function each(array, fn) {
  // VARIABLES

  // PROCESS
  // for loop thru array, invoke callback on each element
  for(var i = 0; i < array.length; i++) {
  	fn(array[i]);
  }
}
each([1,2,3,4], function(val){
    console.log(val);
});

//--------------------------------------------------------------------------------------------------
// Exercises

// Write a function called map which accepts two parameters: an array and a callback.  The map function should return a new array with the result of each value being passed to the callback function.
// input: array and callback
// output: new array
function map(array, fn) {
  // VARIABLES
  var mapArray = [];

  // PROCESS
  // return a new array with result of each being passed to the callback
  each(array, function(value) {
  	mapArray.push(fn(value));
  })
  return mapArray;
}
console.log(map([1,2,3,4], function(val){
    return val * 2;
}));

// Write a function called reject which accepts two parameters: an array and a callback. The function should return a new array with all of the values that do not return true to the callback.
// input: array and a callback
// output: new array
function reject(array, fn) {
  // VARIABLES
  var rejectArray = [];
  // PROCESS
  // return a new array with all of the values that do not return true
  each(array, function(value) {
    if(!fn(value)) {
      rejectArray.push(value);
    }
  });
  return rejectArray;
}
console.log(reject([1,2,3,4], function(val){
    return val > 2;
})); // [1,2]


//--------------------------------------------------------------------------------------------------
// Exercises

// What's the difference between setInterval and setTimeout?
// The main difference is that setTimeout will only run once, and setInterval will run (infinitely) until the timer is cleared.

// What is the difference between using setInterval and a loop.  Why would you want to choose one over the other?
// Using setInterval gives you the ability to execute code after a specific amount of time - an example of when this might be useful is in a game where you want some type of animation to show after up, only after a certain amount of time has elapsed.  

// What is the first parameter that setInterval and setTimeout accept?
// The first parameter is a callback function.

// Why is it so important to store the result of setInterval and setTimeout in a variable?
// So, you can keep track of/manage the outputs from setInterval and setTimeout.

// What does asynchronous mean in the context of setTimeout and setInterval? 
// It means code that will be executed at a later point in time.


//--------------------------------------------------------------------------------------------------
// Closure Exercises

// What is a closure
// A closure is when a function is able to access variables from an outer function that has already retuned.

// List two reasons closures are useful?
// 1) Enables the creation of private variables.  2) Write better code that isolates logic and application.

// What is a module?
// A module is a piece of code that is encapsulated and can be reused.

// What is the arguments array-like object?
// It is an object that provides infomation about the arguments being passed into a function.

// What is the arguments an array-like-object?
// The arguments object looks like an array and has some standard array-like methods (ie. length), but it is really a special object and doesn't do other array methods (ie. push).

// Write a function called createCounter. This function should contain a variable count that is initialized to 0.  This function should return another functon that when invoked, increments the counter by 1 and returns the count variable.  You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.
// input:  
// output:
function createCounter() {
  // VARIABLES
  var count = 0;
  // PROCESS
  return function inner() {
    console.log(++count);
  }
} 
var firstCounter = createCounter();
firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

var secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4


//--------------------------------------------------------------------------------------------------
// Higher Order Functions, Timers, and Closures Exercises.

// countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it.  Once the value is 0, it shoud log 'DONE!' and stop.
// input: a number
// output: console log countdown
function countdown(number) {
  // VARIABLES

  // PROCESS
  // use a setInterval
  // console.log numbers down to 1
  // console.log done for iteration 0
  var timing = setInterval(function() {
    number--;
    if(number === 0) {
      clearInterval(timing);
      console.log('DONE!');
    } else {
       console.log(number);
    }
  }, 1000)
 
countdown(4);

// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter.  If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.
// input:  
// output: the count of how many times it took to generate a random number > .75
function randomGame() {
  // VARIABLES
  var count = 0;

  // PROCESS
  // set interval, generate random number between 0 and 1, count iterations, stop when random num > .75
  var randomTimer = setInterval(function() {
    ++count;
    console.log(count);
    //randomNumber = Math.random();
    if(Math.random() > 0.75) {
      clearInterval(randomTimer);
      console.log(count);
    }
  }, 1000)
  
}

// isEven
// Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not.
// input: number
// output: boolean - true if number is even, false if it is not
function isEven(number) {
  // VARIABLES
  
  // PROCESS
  // return one line statement with modulo
  return (number % 2 === 0); 
}
console.log(isEven(3));

// isOdd
// Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not.
// input: number
// output: boolean - true if odd, false otherwise 
function isOdd(number) {
  // VARIABLES

  // PROCESS
  return (number % 2 !== 0);
}
 
// isPrime
// Write a function called isPrime which takes in a number and returns if the number is a prime number (is greater than 1 and can only be divided by in whole by itself and 1), otherwise returns false.
// input: number
// output: boolean - return true if the number is prime, false if not 
function isPrime(number) {
  // VARIABLES
  
  // PROCESS
  // if number === 1, return prime
  // if number % 2 === 0, return false
  // if number % 3 === 0, retrn false
  // else true
  if(number === 1) {
    return true
  } else if(number % 2 === 0 || number % 3 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isPrime(17));

// numberFact
// Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it.
// input: a number and a callback
// output: returns the result of the callback with the number passed to it
function numberFact(number, callback) {
  // VARIABLES

  // PROCESS
  return callback(number);

}

// find
// Write a function called find.  It should take in an array and a callback and return the first value found in the arrAy that matches the condistion.  
// input: an array, and a callback
// output: return the first value that matches/meets considion
function find(array, callback) {
  // VARIABLES
  
  // PROCESS
  // loop thru each item in array, return first element that meets callback condition
  for(var i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return array[i];
    }
  }
}
console.log(find([8,11,4,27], function(val){return val === 5;}))

// findIndex
// Write a function called find.  It should take in an array and a callback and return the first value found in the arrAy that matches the condistion.  
// input: an array, and a callback
// output: return the first value that matches/meets considion
function findIndex(array, callback) {
  // VARIABLES
  
  // PROCESS
  // loop thru each item in array, return the index of the first element that meets callback condition
  for(var i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return i;
    }
  }
}
console.log(findIndex([8,11,4,27], function(val){return val >= 10;}))

//specialMultiply
// Write a function called specialMultiply which accepts two parameters.  If the function is passed both parameters if should return the product of the two.  If the functon is only passed one parameter - it should return a function which can later be passed another parameter to return the product.  
// input: two numbers
// output: the product of the two numbers
function specialMultiply(number1, number2) {
  // VARIABLES:

  // PROCESS:
  if(arguments.length === 1) {
    return function(number2) {
      return number1 * number2;
    }
  }
  return number1 * number2;
} 
console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // returns a function

























