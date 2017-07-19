//Debugging Exercises

// What does the throw keyword do?
// A throw is a user-defined exception that's used within a try/catch statement - it passes control to the first catch block, before returning the user-defined exception.

// What does the finally keyword do?
// Finally statements execute immediately afer the try/catch statement, regardless of whether or not an exception was thrown or caught.

// What is the difference between a TypeError and ReferenceError?
// A ReferenceError occurs when we try to access a variable that doesn't exist in that scope.
// A TypeError occurs when we make incorrect use of certain types in JavaScript. (ie. try to call something that is not a function).

// How do we create a snippet in Chrome dev tools?
// Open dev tools (Windows - Ctrl + S), navigate to the Sources tab, go to the Snipptes sub-tab, and create a New Snippet, give the snippet a name, and save it.

// What is an exception?
// An exception is an error.

//How do we "catch" errors in JavaScript?  Give an example with code for what that might look like.
//  try {
//   if (somevalue === false);
//     throw 'throw desired error message'
// } catch(e) {
// 	console.log('the eror is ', e);
// }


//Part I
// Question 1
// ReferenceError - because person has not been defined and doesn't exist in this global scope.  To fix it, put the declaration var in front of person (ie. var person;).  The value of person, at this point, will still be undefined, but it won't throw an error because the variable person exists in this scope.

// Question 2
// TypeError - because data.displayInfo() is not a function.  In fact, in this scenario data is an empty object.  To fix it, define displayInfo (i.e. data.displayInfo = function() {console.log('Rithm');})

// Question 3
// TypeError - becuase you can't set a property (foo) on an undefined property (displayInfo).  To fix it, you could define displayInfo (ie. data.displayInfo = {};) and then define displayrInfo.foo (ie. data.displayInfo.foo = 'bar';).

// Question 4
// Reference Error - because thing is not defined in this global scope, it is only defined in the scope of the data function.  To fix it, return var thing in the context of the data function (ie. return thing;), and then call data() to get the value of thing.


// Part II
// Question 1
for(var i=0; i < 5; i++){
    console.log(i);
}

// i > 5, is incorrect.  This part of the statement is supposed to indicate how long the loop should go until.  In this case, i = 0 and never satisfies the condition of i > 5 so the loop (and console.log) doesn't run.  To fix it, I just changed the > sign to <.

// Question 2
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

// num % 2 = 0 is incorrect.  When comparing values you need to use the double/truthy (==) or triple/strict (===) equal signs. The single equals (=) sign is used for setting/assigning a value.

// Question 3
function loopToFive(){
    for(var i=0; i <= 5; i++){
        console.log(i);
    }
}

//SyntaxError and comparison error.  To fix it, use semicolons (instead of commas) to separate the conditions in the for statement.  And, change i < 5 to i <= 5.

// Question 4
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8] 

// i < numbers.length - 1, needs to be i < numbers.length.  The semicolon after the i++ needs to be removed.  numbers needs to be changed to numbers[i], to reference each individual element of the numbers array.  The semicolon after the ending if condition parentheses needs to be removed.  The comparison operator in the if clause needs to be changed to either == or ===.  The value pushed to the array needs to be changed from i to numbers[i], so the actual number is pushed, rather than it's index.  The return statement needs to be put after the closing bracket of the for statment.  
