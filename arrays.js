// Arrays in javaScript
let arr = [1,2,3,4,5];
console.log(arr[0])

// We can store object in the array, and we can access object by index number
const colors = [
    { color: "red", hex: "#FF0000" },
    { color: "green", hex: "#00FF00" },
];

// accessing property value object in the array
console.log(colors[0].color)

// Similar to array we can also store array in the object.

let data = {
    dataOne: [[1,2],[3,4,5]],
    dataTwo: [6,7,8,9,10],
};

// accessing first element of array in the object
console.log(data["dataOne"][1])


for (let print in data) {
    console.log(data)
}

// In javascript we can also perform comparison between strings here we are comparing two string first of all
// first character of both strings are compared if they are equal then the second character of both
// string will be compared if any one of them is greater, then condition will be considered true

if ("hello" < "world") {
    console.log("true")
}
else {
    console.log(false)
}

