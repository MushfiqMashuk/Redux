// immutablity
// Numbers and Strings are immutable in Javascript
// Arrays and Objects are mutable in Javascript 

let a = {name: "Mashuk"};
let b = {Name: "Mushfiq"};
let number = 4;
let str = "abc";
let arr = [1,2,3,4];
let str2 = new String("nice");

number+= number;
a.age = 24;
a.name = "Einstein";
str = "z"
arr[0] = 56;

console.log(a);
console.log(str);
console.log(typeof str2);
console.log(number);
console.log(arr);


// copy objects immutably

const obj = {name: "Joshim", address: {
    city: "New York",
    home: "Town"
}}

const obj2 = {
    ...obj,
    address: {
        ...obj.address,
        road: 23
    },
    age: 45
}

console.log(obj);
console.log(obj2);