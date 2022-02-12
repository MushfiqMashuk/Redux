// // immutablity
// // Numbers and Strings are immutable in Javascript
// // Arrays and Objects are mutable in Javascript 
// import {produce} from "immer";

// console.log(produce);

// let a = {name: "Mashuk"};
// let b = {Name: "Mushfiq"};
// let number = 4;
// let str = "abc";
// let arr = [1,2,3,4];
// let str2 = new String("nice");

// number+= number;
// a.age = 24;
// a.name = "Einstein";
// str = "z"
// arr[0] = 56;

// console.log(a);
// console.log(str);
// console.log(typeof str2);
// console.log(number);
// console.log(arr);


// // copy objects immutably

// const obj = {name: "Joshim", address: {
//     city: "New York",
//     home: "Town"
// }}

// // It's a deep copy but cumbersome
// const obj2 = {
//     ...obj,
//     address: {
//         ...obj.address,
//         road: 23
//     },
//     age: 45
// }

// console.log(obj);
// console.log(obj2);

// // deep copying arrays immutably

// //const arr3 = [1,2,3];
// //const arr4 = [...arr3, 5];

// // 

// const arr3 = [1,2,3];

// const index = arr3.indexOf(3);
// // inserting an element to a specific index
// const arr4 = [...arr3.slice(0, index), 4, ...arr3.slice(index)];

// // insert at the first index
// const arr5 = [100, ...arr4];

// // removing an element immutably 
// const arr6 = arr5.filter(n => n === 100 ? 0 : n);

// // updating array immutably
// const arr7 = arr5.map(n => n === 100 ? 0 : n);

// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);
// console.log(arr7);


// // Enforcing Mutation with immutable librries
// // immer is an immutable library

// const player = {name: "Khabib"};

// const newPlayer = produce(player, draftPlayerObject => {
//     draftPlayerObject.age = 31
// });

// console.log(player);
// console.log(newPlayer);

// // A Reducer Function must be a pure Function. It will always returns the same output given by the same argument.