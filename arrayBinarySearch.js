// hashing gives O(1) time complexity average case lookups, using a hash function to map to indices of an array; This is one of the fastest search.
// will only code array binary search here;
// array binary search is constant time O(1);

const mergeSort = require('./mergeSort');

function binarySearch(array, valueBeingSearch){

    let sortedArray = mergeSort(array);
    
    let leftIndex = 0; //initial index 0;
    let rightIndex = sortedArray.length - 1; //initial is last index
    let middleIndex;

    while (rightIndex >= leftIndex){ //this means there are still values

        console.log("while loop hit");

        middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        // right index will shrink, left will increase
        
        // base case    
        if (valueBeingSearch == sortedArray[middleIndex]){
            console.log(`First occurence of Searched value is at index ${middleIndex}, that index will be returned`);
            let foundIndex = middleIndex;

            handlingDuplicates(sortedArray, foundIndex, valueBeingSearch);

            return middleIndex;
        }

        if (valueBeingSearch > sortedArray[middleIndex]){
            leftIndex = middleIndex + 1;
        }
        else if (valueBeingSearch < sortedArray[middleIndex]){
            rightIndex = middleIndex - 1;
        }
    }
    console.log("SearchValue is not in array");
    return false;
}

function handlingDuplicates(sortedArray, foundIndex, valueBeingSearch){

    if (sortedArray[foundIndex+1] == valueBeingSearch && sortedArray[foundIndex-1] == valueBeingSearch){
        while (sortedArray[foundIndex-1] == valueBeingSearch){
            foundIndex--;
        }
        while (sortedArray[foundIndex+1] == valueBeingSearch){
            console.log(`Full occurrences found at index ${foundIndex+1}`)
            foundIndex++
        }
    } else if (sortedArray[foundIndex+1]== valueBeingSearch){
        while (sortedArray[foundIndex+1] == valueBeingSearch){
            console.log(`Duplicate occurence found at index ${foundIndex+1}`)
            foundIndex++
        }
    } else if (sortedArray[foundIndex-1]== valueBeingSearch){
        while (sortedArray[foundIndex-1] == valueBeingSearch){
            console.log(`Duplicate occurence found at index ${foundIndex-1}`)
            foundIndex--
        }
    }
}

// test
let array1 =new Array(2, 4, 18, 2, 17, 16, 16, 16, 16, 19, 16, 16);
let searchResult = binarySearch(array1, 16);

module.exports = binarySearch;