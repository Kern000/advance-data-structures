const { SinglyLinkedList: LinkedList } = require("./linkedList");

class Queue {
    constructor (){
        this.items = new LinkedList();
    }

    enqueue(data){
        return this.items.push(data);
    }

    dequeue(){
        return this.items.shift();
    }

    size(){
        let size = this.items.length();
        console.log(`Size of queue is ${size}`);
        return size;
    }

    printQueue(){
        console.log("printing queue. Firstmost will be cleared first, Lastmost is most recently added")
        this.items.printLinkList();
    }

    isEmpty(){
        let size = this.items.length();
        if (size == 0){
            return true;
        } else {
            return false;
        }
    }

    frontOfQueue(){
        if (this.isEmpty()){
            console.log("Queue is empty");
        } else {
            console.log("Front of queue is ", this.items.head.getNodeValue());
            return this.items.head.getNodeValue();
        }
    }

}

// Simple testing of Queue FIFO without using test cases//
// let hello1 = new Queue;
// hello1.enqueue(5);
// hello1.enqueue(6);
// hello1.frontOfQueue();
// hello1.printQueue();
// hello1.size();
// hello1.dequeue();
// hello1.printQueue();
// console.log(hello1.isEmpty());

module.exports = Queue;