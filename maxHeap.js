// heapify - creating heap from array.
// insert, delete while organization
// max-heap - root node must be the biggest
// min-heap - root node must be smallest
// time complexity O(log n) to balance the tree - like when inserting
// left and the right child of ith node are in indices 2*i+1 and 2*i+2.

// If arr[2 * i + 1] > arr[i], i.e., the left child is larger than the current value, it is set as ‘MAXIMUM’.
// same for arr[2 * i + 2] > arr[i], i.e., the right child is larger

// Heaps are good for implementing priority queues (and scheduling queues) - also used in Dijkstra’s algorithm, Prim’s algorithm, and Kruskal’s algorithm. // also used in load balancing.
// getMax() - return root
// extractMax() - remove the root - like processing a queue
// editKey() - will need to rebalance if value exceeds the parent
// insert()
// delete()
// heapsort O(n log n);

// disadv - not ideal for search - traverse entire O(n); Heaps also take linear time to build.
// memory mgt - req dynamic memory allocation

class MaxHeap{
    constructor(maxSize){
        this.array = new Array(maxSize).fill(null);
        this.maxSize = maxSize; // heap maxsize
        this.heapSize = 0; // elements currently in heap
    }

    findParentIndex(childIndex){
        return Math.floor((childIndex - 1)/2);
    }

    findLeftChild(parentIndex){
        return 2*parentIndex + 1;
    }

    findRightChild(parentIndex){
        return 2*parentIndex + 2;
    }

    maxHeapifyOne(index){ //maxHeapify (rearranging) everything again, if got changes
        const left = this.findLeftChild(index);
        const right = this.findRightChild(index);

        let largest = index;    //placeholder for index of largest value tt will be updated

        if (left < this.heapSize && this.array[left] > this.array[index]){
            largest = left;
        }
        if (right < this.heapSize && this.array[right] > this.array[largest]){
            largest = right;
        }
        if (largest !== index){
            const temp = this.array[index];
            this.array[index] = this.array[largest];
            this.array[largest] = temp;
            this.maxHeapifyOne(largest); //recursive
        }
    }

    getMax(){
        return this.array[0];
    }

    getHeapSize(){
        return this.heapSize;
    }

    removeMax(){ //remove root which contain max element in maxHeap
        if (this.heapSize <= 0){
            console.log("Heap is empty.");
            return null;
        }
        if (this.heapSize === 1){
            this.heapSize -=1;
            return this.array[0];
        }

        // "logical" shift of first element - maxSize of array dun change, heapSize uses part of the array to do this artificial shift() method - updating array is O(1);
        const root = this.array[0];
        this.array[0] = this.array[this.heapSize-1]; //assign last element in heap
        this.array[this.heapSize-1] = null;
        this.heapSize -=1;

        this.maxHeapifyOne(0); //after every op, heapify arrange;
        return root;
    }

    increaseKey(index, newValue){
        if (index < this.heapSize){
            this.array[index] = newValue;
        } else {
            console.log("Index is out of heap range");
        }
        while (index !==0 && this.array[this.findParentIndex(index)] < this.array[index]){
            const temp = this.array[index];
            this.array[index] = this.array[this.findParentIndex(index)]; //swap coz parent smaller
            this.array[this.findParentIndex(index)] = temp; //swap complete
            index = this.findParentIndex(index); //while loop to change all the way to the top
        }
    }

    deleteKey(index){
        if (index < this.heapSize){
            this.increaseKey(index, Infinity); //push a key to top, then we just shift() it            
            this.removeMax();
        } else {
            console.log("out of range");
            return;
        }
    }

    insertKey(newKeyValue){
        if(this.heapSize === this.maxSize){
            console.log("Heap size already reach maximum, unable to insert");
            return;
        }

        let index = this.heapSize;
        this.array[index] = newKeyValue; //push
        this.heapSize += 1;

        while (index !== 0 && this.array[this.findParentIndex(index)] < this.array[index]){
            const temp = this.array[index];
            this.array[index] = this.array[this.findParentIndex(index)]
            this.array[this.findParentIndex(index)] = temp;
            index = this.findParentIndex(index);
        }
    }

}

// testing //
// const heap1 = new MaxHeap(15); 

// heap1.insertKey(3);
// heap1.insertKey(10);
// heap1.insertKey(12);
// heap1.insertKey(8);
// heap1.insertKey(2);
// heap1.insertKey(14);

// console.log(heap1.array);
// console.log("Size of heap is", heap1.getHeapSize());
// console.log("Current max element is", heap1.getMax());

// heap1.insertKey(22);
// heap1.deleteKey(22);
// console.log(heap1.array);
// heap1.deleteKey(4);
// heap1.insertKey(15);
// console.log("test breakpoint 1 here");
// heap1.increaseKey(4, 16);
// console.log(heap1.array);
// console.log("test breakpoint 2 here");

// console.log("Size of heap is", heap1.getHeapSize());
// console.log("Current max element is", heap1.getMax());

// heap1.insertKey(1);
// heap1.insertKey(32);
// console.log(heap1.array);

// End of testing //

module.exports = MaxHeap;