const readline = require('readline');

// Function to calculate the sum of squares of an array
function sum(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            console.error(`Invalid number encountered: ${array[i]}`);
            return NaN; // Return NaN to indicate an error in the input
        }
        sum += Math.pow(array[i], 2);
    }
    return sum;
}

// Function to get an array of numbers from the user
function getUserArray(input) {
    var array = input.split(',').map(Number);
    if (array.some(isNaN)) {
        console.error("Invalid input. Please enter valid numbers separated by commas.");
        return [];
    }
    return array;
}

// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input and calculate the sum of squares
rl.question("Enter numbers separated by commas: ", (input) => {
    var userArray = getUserArray(input);
    if (userArray.length > 0) {
        console.log(`Sum of squares: ${sum(userArray)}`);
    } else {
        console.log("No valid input to process.");
    }
    rl.close();
});





