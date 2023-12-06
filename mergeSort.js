function mergeSort(array){

    console.log("length of array/subarray:", array.length);

    if (array.length <= 1){
        return array;
    }
    // base case, no need sort since length 1 or less

    let middleIndex = Math.floor(array.length / 2); //round down
    console.log("middle index is", middleIndex);

    let left = mergeSort(array.slice(0,middleIndex)); //middle index not inclusive
    console.log("left subarray here", left);

    let right = mergeSort(array.slice(middleIndex))
    console.log("right subarray here", right);
    // recursive, will separate all until they are single value arrays

    let sortedValues = [];

    // code below w sort by comparing adj arrays' values and sort them

    let leftIndexSlider = 0;
    let rightIndexSlider = 0; //on each recursion, return to 0

    while(leftIndexSlider < left.length && rightIndexSlider < right.length){ //iterate through the left and right
        if (left[leftIndexSlider] < right[rightIndexSlider]){ //compare adj, because both right and left is sorted first b4 comparision, if [a,b] of left < c of [c,d], it will be smaller, so push into sorted values. similar if right smaller than the left smallest in leftmost

            console.log('left slider index: ', leftIndexSlider);
            console.log(`left: ${left[leftIndexSlider]} < right: ${right[rightIndexSlider]}`);

            sortedValues.push(left[leftIndexSlider]);
            leftIndexSlider += 1;
        }
        else {

            console.log('right slider index: ', rightIndexSlider);
            console.log(`right: ${right[rightIndexSlider]} < left: ${left[leftIndexSlider]}`);

            sortedValues.push(right[rightIndexSlider]);
            rightIndexSlider += 1;
        }
    }
    // push any remaining value, since the bigger values won't be pushed
    sortedValues.push(...left.slice(leftIndexSlider));
    sortedValues.push(...right.slice(rightIndexSlider));

    console.log("This recursion's sorted values here", sortedValues);
    return sortedValues;
}

// Testing //
// const numbers = [4,5,7,8,10,1,2,5]
// let sortForMe = mergeSort(numbers);
// console.log(sortForMe); // sorted values

module.exports = mergeSort;




