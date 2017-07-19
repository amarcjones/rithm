// Objects
// Exercises
var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};


// Write a function called displayCities that console.logs all the values in the citiesLivedIn array.
// input: nested data structure/collection
// output: console.log all values in the citiesLivedIn array
function displayCities(collection) {
  // VARIABLES
  var citiesArray;
  // PROCESS
  // drill down to the citiesLivedIn array - create a var name for location
  citiesArray = collection.additionalData.moreDetails.citiesLivedIn;
  // loop thru cities, console.log element value of each iteration 
  for(var i = 0; i < citiesArray.length; i++) {
  	console.log(citiesArray[i]);
  }
}
// displayCities(instructorData);


// Write a function called displayHometownData that console.logs all the values inside of the hometown object.
// input: nested data structure/collection
// output: console.log all the values in the hometown object
function displayHometownData(collection) {
  // VARIABLES
  var hometownObject;

  // PROCESS
  // drill down to the hometown object and set the location equal to a variable
  hometownObject = instructorData.additionalData.moreDetails.hometown;
  // loop thru the objects keys and console.log their values
  for(var n in hometownObject) {
  	console.log(hometownObject[n]);
  }
}
// displayHometownData(instructorData);


// Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and the value to the moreDetails object and returns the moreDetails object.
// input:  two parameters (a key and a value)
// output: an object with the key value pair added
function addDetail(key, value) {
  // VARIABLES
  var moreDetailsObject;

  // PROCESS
  // drill down to the moreDetails object and assign it equal to a variable
  moreDetailsObject = instructorData.additionalData.moreDetails;
  // add the key/value parameters to the moreDetails object
  moreDetailsObject[key] = value;
  // return moreDetails object;
  return moreDetailsObject;
}
// console.log(addDetail("isHilarious", true));


// Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples)
// input: propety to remove
// output: return object, showing property has been deleted
function removeDetail(prop) {
  // VARIABLES
  var moreDetailsObj;
  // PROCESS
  // drill down to the moreDetails object and assign a variable to the location
  moreDetailsObj = instructorData.additionalData.moreDetails;
  // delete the object property passed in as the function parameter
  delete moreDetailsObj[prop];
  // return moreDetails object
  return moreDetailsObj;
}
// removeDetail('citiesLivedIn');


//---------------------------------------------------------------------------------------------
// Nested Objects Exercises

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

// Using a loop, console.log all of the numbers in the primeNumbers array.
// input: nested data structure
// output: console.log all the numbers in the primeNumbers array
// process: drill down to the primeNumbers array and attach a variable to the value
  var primeArray = nestedData.innerData.numberData.primeNumbers;
//   for loop thru the array and console.log each element
  for(var i = 0; i < primeArray.length; i++) {
  	console.log(primeArray[i]);
  }

// Using a for loop console.log all of the even Fibonnaci numbers
// input: an array of Fibonnaci numbers
// output: console.log the value of the even numbers in the array
// process: drill down to the Fibonnaci array and set the locattion equal to a variable
  var fibArray = nestedData.innerData.numberData.fibonnaci;
//  console.log the even numbers - determine using % 
  for(var i = 0; i < fibArray.length; i++) {
  	if(fibArray[i] % 2 === 0) {
  		console.log(fibArray[i]);
  	}
  }

// Console.log the value 'second' inside the order array.
console.log(nestedData.innerData.order[1]);

// Invoke the addSnack function and add the snack 'chocolate'.
nestedData.innerData.addSnack('chocolate');
console.log(nestedData.innerData.snacks);

// Inside of the addSnack function there is a special keyword called this.  What does the word this refer to inside the addSnack function?
// Inside the addSnack function, this refers to the innerData object.


var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

// Write a function addSpeaker to add a speaker to the array of speakers.  The speaker you add must be an object with a key of name and a value of whaever you'd like.
// input: nested data structure/collection - target is an array
// output: a new object added to the speakers array
function addSpeaker(collection) {
  // VARIABLES
  // PROCESS
  collection.speakers.push({name: 'AMJ'});
}
// console.log(nestedObject.speakers);

// Write a function addLanguage that adds a language to the languages object.  The language object you add should have a key with the name of the language and the value of another object with a key of 'hello' and a value of however you spell 'hello' in the language you add.
// input:
// output: adding a language to the languages object
function addLanguage() {
  // VARIABLES
  var langObj;
  // PROCESS
  // drill down to the languages object and assign a variable to the location
  langObj = nestedObject.data.languages;
  // add a new object (language object) to this object
    // added object should have a key (name of the language) and value (another object with a key of 'hello' and value of how you say hello in new language)
  langObj.dutch = { hello: 'Hallo'};
  // return languages object;
  return langObj;
}
// addLanguage();
// console.log(nestedObject.data.languages);

// Write a function addCountry that adds a  European country to the countries object (inside of the continents obect, inside of the countries object).  The country you add should be an object with the key as name of the country and the value as an object with the keys of 'capital' and 'population' and their respective values.
// input: nested data structure - target is countries object
// output: add a new country object to the existing countries object
function addCountry() {
  // VARIABLES
  var countriesObj;
  // PROCESS 
  // drill down to the countries object and assign a variable to it
  countriesObj = nestedObject.data.continents.europe.countries;
  // add a new country wth two keys (capital and population) and their corresponding values
  countriesObj.spain = {capital: 'madrid', population: 3300000}
  // return countriesObj with added country details
}
addCountry();
console.log(nestedObject.data.continents.europe.countries);


//---------------------------------------------------------------------------------------------
// Nested Arrays Exercises

// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right.  For the value at the end of the array, rotate should move it back to the beginning.
// input: a array and a number
// output: an array with each element moved to the right 'number' spaces
function rotate(array, number) {
  // VARIABLES
  var arrLength = array.length;
  var elementValue;
  var newIndex;
  var finalArray = [];

  // PROCESS
  // for loop thru the array and set the value of each element equal to a variable
  // calculate new index of each element and put element into finalArray at newIndex
  for(var i = 0; i < array.length; i++) {
    elementValue = array[i];
    newIndex = (i + number) % array.length;
    finalArray[newIndex] = elementValue;
  }
  return finalArray;
}
console.log(rotate([1,2,3], 2));

// Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter.  The values in the sub-arrays should switch between 'x' and 'o'.
// input: number (of arrays) and number (of elements in each array)
// output: array of arrays with designated number of elements in each array
function makeXOGrid(arrays, elements) {
  // VARIABLES
  var finalArray = [];
  var counter = 0;
  // PROCESS
  // for loop thru "elements" times
  // put an 'x' or 'o' in array on each new iteration
  for(var i = 0; i < arrays; i++) {
    var subArray = [];

    for(var j = 0; j < elements; j++) {
      subArray.push(counter % 2 === 0 ? 'X' : 'O')
      counter++
    }
    finalArray.push(subArray);
  }
  return finalArray;
}

console.log(makeXOGrid(3,3));
