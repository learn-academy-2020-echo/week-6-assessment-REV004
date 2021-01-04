// ASSESSMENT 6: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
	{ name: "ford prefect", occupation: "hitchhiker" },
	{ name: "zaphod beeblebrox", occupation: "president of the galaxy" },
	{ name: "arthur dent", occupation: "radio employee" },
];

const sentence = (array) => {
  //initially map through array to obtain values within
  let firstLetterCap = array.map(value => {
    //split the values(names) within people.name
    let splitNames = value.name.split(" ")
      //people.name map to capitalize only first char for both names + interpolate people.occupation
      return splitNames.map(value => value.charAt(0).toUpperCase() + value.substring(1)).join(" ") +  is a ${value.occupation}.
  })
  //return people.name.toUpperCase (+ interpolated people.occupation)
  return firstLetterCap
}
console.log(sentence(people))

// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false];
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

const numDivided = (arr) => {
	let numArr = arr.filter((val) => {
		return typeof val === "number";
	});
	return numArr.map((arr) => {
		return arr % 3;
	});
};
console.log(numDivided(testingArray1));
console.log(numDivided(testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"];
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7];
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const noDuplicates = (arr1, arr2) => {
	let uniqueArray = arr1.concat(arr2);
	return uniqueArray.filter(
		(item, index) => uniqueArray.indexOf(item) === index
	);
};

console.log(noDuplicates(testingArray3));
console.log(noDuplicates(testingArray4));
