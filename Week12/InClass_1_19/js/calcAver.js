
function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        // console.log(`FL0:sum:${sum}`)

    }
    // console.log(`FL1:sum:${sum}`)
    let average = 0
    if ( numbers.length > 0) {
        average = sum / numbers.length;
    }

    return average;
}

function doAver() {

// Test the function with an array
    numbersArray = [-2.5, 2.5];
    let result = calculateAverage(numbersArray);
    document.getElementById("results").innerHTML = `The average is: ${result}`;
    console.log(`The average is: ${result}`);
}
