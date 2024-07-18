
const readline = require('readline');

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    const firstElement = arr[0];

    if (typeof firstElement !== 'number' || !Number.isInteger(firstElement)) {
        return "First element is not an integer";
    }

    return isPrime(firstElement) ? "First element is prime" : "First element is not prime";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an array of numbers separated by commas: ", (userInput) => {
    const array = userInput.split(',').map(Number);
    console.log(checkFirstElementPrime(array));
    rl.close();
});

