// functions in JavaScript
let result = function square(x) {
    return x * 1;
}

// console.log(square(50, 50)) // error because now we can only access the function by using its reference
// variable 'result' e,g
//console.log(result(50, 50))

// other way to create function
function add(first) {
    return first + 1;
}


// invoke two functions in one expression (first result function will be called then the return value of
// result function will be passed to 'add' function

const resultOfBoth = add(result(5))
console.log(resultOfBoth)


// Arrow functions in javaScript (=>)

// Here we have created an arrow function the result will be assigned to 'divide' variable, and we don't need
// to use 'return' keyword because we are not using curly braces if we round up the function body in curly
// braces we need to use return keyword
let divide = divideNumber => divideNumber / 5
console.log(divide(2))

// let divide = divideNumber => { return divideNumber / 5} // return statement because curly braces used

// When we use functions with objects we call them methods and all objects have methods

let createArr = [];
// push method of array (built in)
createArr.push(10,20,30,40,50)
console.log(createArr[0])
// it will remove the top most element from array
createArr.pop()
console.log(createArr[3])

// reverse the array
createArr.reverse()
console.log(createArr)


points.distanceModel

