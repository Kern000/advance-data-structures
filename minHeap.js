class MinHeap{
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

    minHeapifyOne(index){
        const left = this.findLeftChild(index);
        const right = this.findRightChild(index);

        let smallest = index;

        if (left < this.heapSize && this.array[left] < this.array[index]){
            smallest = left;
        }
        if (right < this.heapSize && this.array[right] < this.array[smallest]){
            smallest = right;
        }
        if (smallest !== index){
            const temp = this.array[index];
            this.array[index] = this.array[smallest];
            this.array[smallest] = temp;
            this.minHeapifyOne(smallest); //recursive
        }
    }

    getMin(){
        return this.array[0];
    }

    getHeapSize(){
        return this.heapSize;
    }

    removeMin(){
        if (this.heapSize <= 0){
            console.log("Heap is empty.");
            return null;
        }
        if (this.heapSize === 1){
            this.heapSize -=1;
            return this.array[0];
        }

        const root = this.array[0];
        this.array[0] = this.array[this.heapSize-1];
        this.array[this.heapSize-1] = null;
        this.heapSize -=1;

        this.minHeapifyOne(0); //after every op, heapify arrange;
        return root;
    }

    decreaseKey(index, newValue){
        if (index < this.heapSize){
            console.log("new value here", newValue);
            this.array[index] = newValue;
        } else {
            console.log("Index is out of heap range");
            return;
        }
        while (index !==0 && this.array[this.findParentIndex(index)] > this.array[index]){
            
            const temp = this.array[index];
            this.array[index] = this.array[this.findParentIndex(index)]; //swap coz parent smaller
            this.array[this.findParentIndex(index)] = temp; //swap complete
            index = this.findParentIndex(index); //while loop to change all the way to the top
            console.log("within while loop", this.array)
        }
    }

    deleteKey(index){
        if (index < this.heapSize){
            this.decreaseKey(index, -Infinity); //push a key to top, then we just shift() it            
            console.log("before remove min but after decrease key", this.array);
            this.removeMin();
            
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
        this.array[index] = newKeyValue;
        this.heapSize += 1;

        while (index !== 0 && this.array[this.findParentIndex(index)] > this.array[index]){
            const temp = this.array[index];
            this.array[index] = this.array[this.findParentIndex(index)]
            this.array[this.findParentIndex(index)] = temp;
            index = this.findParentIndex(index);
        }
    }

}

// testing //
// const heap1 = new MinHeap(15); 

// heap1.insertKey(3);
// heap1.insertKey(10);
// heap1.insertKey(12);
// heap1.insertKey(8);
// heap1.insertKey(2);
// heap1.insertKey(14);

// console.log(heap1.array);
// console.log("Size of heap is", heap1.getHeapSize());
// console.log("Current min element is", heap1.getMin());

// heap1.insertKey(22);
// console.log(heap1.array);
// heap1.deleteKey(22); //outside range
// console.log(heap1.array);
// console.log("test breakpoint 0 here");

// heap1.deleteKey(4);
// console.log(heap1.array);
// console.log("test breakpoint 0.5 here");

// heap1.insertKey(15);
// console.log("test breakpoint 1 here");
// heap1.decreaseKey(4, 16);
// console.log(heap1.array);
// console.log("test breakpoint 2 here");

// console.log("Size of heap is", heap1.getHeapSize());
// console.log("Current max element is", heap1.getMin());

// heap1.insertKey(1);
// heap1.insertKey(32);
// console.log(heap1.array);
// End of testing //

module.exports = MinHeap;