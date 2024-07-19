//Most frequent 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter elements separated by commas: ', (userInput) => {
    let arr1 = userInput.split(',').map(item => isNaN(item) ? item.trim() : Number(item.trim()));

    var m = 1;
    var n = 0;
    var item;
    
    for (var i = 0; i < arr1.length; i++) {
        for (var j = i; j < arr1.length; j++) {
            if (arr1[i] === arr1[j]) {
                n++;
            }
            if (m < n) {
                m = n;
                item = arr1[i];
            }
        }
        n = 0;
    }
    console.log(item + " (" + m + " times)");
    rl.close();
});






