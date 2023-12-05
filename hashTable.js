// hashtable provide constant time avg case complexity for insertion, deletion, retrieval
// hash code det. location of the value
// js objects is a hashtable with Object.keys() Object.values() help with retrieval
// objects hash function is managed by JS engine
// hash code used for indexing, req collision handling of hashcode and memory location
// in java, hashtable is sync, hashmap is not sync and can have concurrency from multiple threads leading to corruption.

// difference between Object and Map => diff methods, Map may hv better insertion and deletion functions and forEach() for looping. While Object use Object.keys() and Object.values()
// Map also can take any thing as a key, whereas Object will coerce a key to become a string
// in essence, in js, objects and Map are very close to hashtable, but does not really operate like a hashmap

const object1 = {a:'hello', b:43}; //in object keys are strings
Object.freeze(object1);
console.log(object1);

for (let [key, value] of Object.entries(object1)){
    console.log(`${key}: ${value}`)
}

const arrayEntries = [['foo', 'bar'],['bar', 33]]
const object2 = Object.fromEntries(arrayEntries);
console.log(object2);

function arrayConversionToObject(array){
    
    let convertedObject = {};

    if(Array.isArray(array)){
        if(array.length !== 0){
            for (let i = 0; i < array.length; i+=2){
                const key = array[i];
                const value = array[i+1];
                convertedObject[key] = value;
                // if key not unique, will take on the new value later in array
            }
            return convertedObject;
        } else {
            throw new Error ("Array to convert to object is empty")
        }
    } else {
        throw new Error ("Argument needs to be a flat array, odd index will be keys, subsequent index will be value, this will repeat for entire array");
    }
}

console.log(Object.keys(object1));
console.log(Object.values(object1));

// if want to loop, better to use Map. //

const map1 = new Map();
map1.set("John", 10000);
map1.clear();
console.log(map1);

map1.set("Peter", 10000);
map1.set("Joseph", 10000);
map1.set("John", 999);
console.log(map1);

console.log(map1.get("John"));

console.log(map1.delete("John"));
console.log(map1);

// Map remembers the order

const stepByStepIterator = map1.entries();
console.log(stepByStepIterator.next().value);
console.log(stepByStepIterator.next().value);

console.log(map1.has("John"));

const stepByStepIteratorKeysOnly = map1.keys();
console.log(stepByStepIteratorKeysOnly);
console.log(stepByStepIteratorKeysOnly.next().value);
console.log(stepByStepIteratorKeysOnly.next().value);

const stepByStepIteratorValuesOnly = map1.values();
console.log(stepByStepIteratorValuesOnly);
console.log(stepByStepIteratorValuesOnly.next().value);
console.log(stepByStepIteratorValuesOnly.next().value);

// Map has forEach() as well - loop for each key
// map parameter is optional like forEach() in array

function printMapEntries(value, key, map) {
    console.log(`${key} => ${value}`);
}

new Map([
    ["John", 100],
    ["Peter", {}],
    ["Jackson", undefined],
]).forEach(printMapEntries);

function multiplyMapValues(value, key, map){
    map[key] = value * 2;
}

let foodPrice = new Map([["mcdonalds", 50], ["kfc", 10], ["popeyes", 55]]);
foodPrice.forEach(multiplyMapValues);
console.log(foodPrice);















