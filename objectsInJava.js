// objects in javaScript

// let book = {
//     name: "The JavaScript: Definitive Guide",
//     author: "Ahmad",
//     yearOfPublish: 2023,
//     numberOfPages: 1245
// };

// We can access object properties in multiple ways.

//console.log(book.name)
//console.log(book["author"])

// optional chaining operator "?." is used to check whether the specified property of the object is existed or not if not it will return 'null' or 'undefined'

//console.log(book?.yearOfPublish)

// Empty object (without any property)
// let writer = {};



// Some Advance code
let employee = {
    name: ["Ahmad", "shahid","kamran"],
    designation: ["server","rider", "kitchen"],
    salary: [33000, 37000, 37000],
    remarks: ["good", "average", "good"],

};

function accessName (index) {
    return this.name[index];
}

// Now the above function is even outside the object still we use 'this' keyword because we have 'bind' the
// object with this function using below statement
let binderFunction = accessName.bind(employee);

console.log(binderFunction(1))

