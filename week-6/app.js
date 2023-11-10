// Recap: Write a loop that will prompt the user 3 times 
// and store the response in an array and console.log or alert
//  the answers when the loop is done

const questions = [
    "What is your name?", 
    "What is your favorite color?", 
    "What city are you in?"
];

const answers = [];

// for (let i = 0; i < questions.length; i++) {
//     var a = prompt(questions[i])
//     answers.push(a)
// }

// alert(answers)


// =====================

// Write a function that takes in an the num Array.
// Remove all the odd number and multiply the rest by 3.
// Return the new array

const num = [2,5,9,10,23];

function getNum(numAry) {
    var noOdd = numAry.filter(function(number){
        return number % 2 === 0
    })

    var multiNum = noOdd.map(function(number){
        return number*3
    })

    return multiNum
}

console.log(getNum(num))


// ===================

// Create a function that will convert Celsius to Fahrenheit and another 
// that will convert Fahrenheit to Celsius

// The function should take in a number and run the formula and return the converted temp

// To convert C to F: Divide by 5, then multiply by 9, then add 32
// To convert F to C: Deduct 32, then multiply by 5, then divide by 9



//   ========================

// Write a function will find the longest word in the array

var words = ["cat", "pizza", "javascript"]

// =============================

// Write a function that will take a word and/or sentence and remove all of the vowels
// and returns a new string not spaces (please account for upper and lower case letters, and spaces)
// ex: 'The Batman' should return 'thbtmn'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
