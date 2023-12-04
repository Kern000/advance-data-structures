let carArray = ["mitsu", "tesla", "Byd"];
let cars= new Array("mitsu", "tesla", "Byd");
console.log(cars);

cars[1] = "Toyota";
let stringCars = cars.toString(); //convert array to strings

console.log(cars);
console.log(stringCars); //again it is a copy

cars.push((argument)=> {console.log("hello " + argument)})
cars[cars.length-1].call(null, "meow"); //first argument usually \"this \" but arrow function inherit \"this\" value
// js cannot cars[-1]; it is a python thing

cars.sort(); //based on ascii, lower case is behind
console.log(cars);

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a,b)=> a - b); //ascending;
// if a > b, a will come after b

console.log(numbers); // need function or else will convert to string in the ASCII sort

numbers.sort((a,b)=> b-a); //descending;
// if b > a, b will come before a

console.log(numbers);

console.log(cars.length);

const threshold = 3;
const container3 = []

function checkingForNumbersLesserThan(number){
    if (number > threshold){
        console.log(`${number} is greater than ${threshold}`);
    } else {
        container3.push(number);
    }
} 

numbers.forEach(checkingForNumbersLesserThan);
console.log(container3);

container3[10] = "undefined holes before this";
console.log(container3);

container3["guy1"] = "hello";
console.log(container3);
console.log(container3.length);

console.log(container3.pop()); //remove last element and return it;
console.log(container3); //the object in the last one is skipped
console.log(container3.pop());
console.log(container3.pop());
console.log(container3.pop());
console.log(container3.pop());
console.log(container3.pop());
console.log(container3.pop());
container3[container3.length -1] = 4;
container3[container3.length -1] = 5;
console.log(container3);

container3.shift(); //remove 1st element and shift all element index
container3.unshift("2"); //insert as 1st element

// joining two arrays
const _1 = ["me1", "me2"];
const _2 = ["me3", "me4"];
const _3 = _1.concat(_2);
console.log(_3);

const _4 = _3.concat(_1, _2);
console.log(_4);

const arr1 = ["john", "you", "me"];
const arr2 = arr1.concat("pete");
console.log(arr2);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

const myArr2 = [[[1,2],[3,4]],[[5,6],[7,8]]]
console.log(myArr2.flat().flat());
// .flat concat, removing one layer

//inserting removing and items to array
const arr3 = ["john", "you", "me"];
console.log(arr3.splice(1, 2, "lemon", "kiwi"));
console.log(arr3);

const arr4 = ["john", "you", "me"];
arr4.splice(1,1);
console.log(arr4);

arr4.splice(1,0,"this","is","inserted","with", "splice");
console.log(arr4);

// slice copies and doesn't touch original array
let arr5 = arr4.slice(1);
console.log(arr5);
console.log(arr4);

let arr6=arr4.slice(2, arr4.length-1);
console.log(arr6);

//iterative functions for array

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((x)=> x-3); //shallow copy again
console.log("numbers1=> ", numbers1);
console.log("numbers2=> " + numbers2);

const numbers3 = [[1,2],[3,4],[5,6]];
const numbers4 = numbers3.flat().map((x)=> x*2);
console.log(numbers4);

const numbers5 = numbers4.filter((x)=> x < 10);
console.log(numbers5);

// reduce is left to right
// reduceRight is right to left

const numbers6 = [45, 4, 9, 16, 25];
let numbers7 = numbers6.reduce(sum);
function sum(accumulator, value){
    return accumulator +value;
}
console.log(numbers7);

console.log(numbers6.indexOf(9));
// lastIndexOf() finds first instance from the end instead

let numbers8 = numbers6.find((x)=>x > 10);
console.log(numbers8);
// first element only for find

let numbers9 = numbers6.findIndex((x)=> x == 16);
console.log(numbers9);

let newArray1 = Array.from("hellothere");
console.log(newArray1);

const elements = ['Fire', 'Air', 'Water'];
const stringElements = elements.join(", ");
console.log(stringElements);

console.log(elements.includes('fire'));
console.log(elements.includes('Air'));

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);






