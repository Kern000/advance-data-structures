// will code out quick sort and merge sort since for time complexity, they tend to be the fastest

// bubble sort - compare ea adj and arrange in order - worst and best O(n**2)
// selection sort - asume first element is min, keep swapping new min and assumed min - worst and best time complexity is O(n**2)
// insertion sort - starts with the first element and, for each subsequent element, compares it with the already sorted portion and inserts it at the correct position. best case O(n) worst is same as above
// The above hv space complexity O(1);
// Quick sort worst case O(n**2), best case O(nlogn); space complexity O(n);
// Merge sort worst and best case O(nlogn) for time complexity, O(n) for space complexity

// Array sorts of contiguous data

// Partition index is where the pivot is correctly placed in the index.

function partitionIndexFinder(array, low, high){

    let pivot = array[high];   //pivot value, high is last index N-1

    // arbitrary positioning to keep track of where elements smaller than pivot should be
    let i = low - 1; // In JS, -1 is valid position, outside array

    for (let j = low; j <= high-1; j++){

        //j <= high - 1 because high is last element (pivot), we want one pos b4

        console.log("This is iteration", j+1);
        console.log(`step ${j}: array[${j}] value ${array[j]} vs pivot value ${pivot}`);

        if (array[j] < pivot){

            console.log("array[j] < pivot triggered");

            i++;

            console.log("Triggered swap")
            console.log("This is i here", i, "This is j here", j);
            console.log(`array[i] value here, ${array[i]}, array[j] value here, ${array[j]}`);

            console.log(`step ${i}: ${array} before swap`);

            [array[i], array[j]] = [array[j], array[i]];
            // because it only trigger when it is smaller, if the prev iteration all bigger than pivot, means when this hit, the array[j] item will be smaller than previous, so by swapping, it swap the small and large value pos
            // if pick large pivot, one whole iteration may not swap anything since pivot bigger than everything - this is reason for O(n**2);

            console.log(`step ${i}: ${array} after swap`);
        }
    }

    // reposition pivot to correct pos, this is crucial step i is the number of numbers in array smaller than the current pivot value
    // so over time after each loop, a number is guaranteed in its necessary position
    // i+1 is correct pos (how many smaller in array + 1), with current pivot array[high]
    [array[i+1], array[high]] = [array[high], array[i+1]]
    console.log("partition index", i+1);
    return i + 1; //return partition index

}

function quickSort(array, low, high){
    
    console.log("Low is here", low);
    console.log("high is here", high);

    if (low < high){    // if there is more than 1 element in the array then we sort
        console.log("first step here");
        let partitionIndex = partitionIndexFinder(array, low, high);
        console.log("quickSort here - partition Index obtained", partitionIndex);

        quickSort(array, low, partitionIndex-1);
        quickSort(array, partitionIndex+1, high);
    }
    console.log("sorting array", array);
}

// quicksort testing
// let array1 = [4,8,9,10,2,44,16, 100, 99, 3, 4]
// let lastIndexPos = array1.length - 1;
// quickSort(array1, 0, lastIndexPos);


module.exports= quickSort;
