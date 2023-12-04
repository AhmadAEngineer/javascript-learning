// sum of all array element

function sumArray(arraySum) {
    let sum = 0;
    for (let counter of arraySum) {
        sum = counter + sum;

    }
    return sum;
}

let array = [1,2,3,4,5]
let sum = sumArray(array);
console.log(sum)

// find factorial of a number
function factorial(number) {
    let product = 1;
    while (number > 1) {
        product *= number;
        number--;
    }
    return product;
}

let getFactorial = factorial(4)
console.log(getFactorial)


// Factorial using for loop

function factorial2(n) { // Another version using a different loop
    let i, product = 1; // Start with 1
    for(i=2; i <= n; i++) // Automatically increment i from 2 up to n
    product *= i; // Do this each time. {} not needed for 1-line loops
    return product; // Return the factorial
}
console.log(factorial2(5))