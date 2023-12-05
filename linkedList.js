const Node = require("./node");

// LinkedList save memory compared to array that allocate memory chunk:
// size incr or decr based on utilization
// memory can be delocated at runtime;
// js has garbage collector freeing up memory no longer used.
// LinkedList excels in insertion and deletion
// weakness: cannot traverse by index
// so creation is slightly slower, insertion, deletion are advantageous, search and traverse can be slower

class SinglyLinkedList {

    constructor(head = null){
        this.head = head;
    }

    // so to use createNewNode, declare new Node, and use that object as argument
    // for typing NodeObject: node
    // inheritance of Node methods as we pass nodes into linked list

    push(data){
        
        const newNode = new Node(data);
        // we will get a node with data as value, and this.next is null

        if (this.head === null){
            this.head = newNode;
            console.log("Pushed node as head");
            return;
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.getNextNode();
                // we will cycle till the end, not very efficient
            }
            currentNode.setNextNode(newNode);
            console.log("pushed new node");
        }
    }

    shift(){
        if(this.head === null){
            throw new Error("no first node to delete");
        } else {
            this.head = this.head.getNextNode();
            return;
        }
    }

    insertAtIndex(index, data){

        const newNode = new Node(data);

        if (index < 0 && this.head == null){
            throw new Error ("Index cannot be less than 0");
            // prevent negative index;
        } else if (index === 0 && this.head === null){
            this.head = newNode;
            return;
        } else if (index === 0 && this.head !== null){
            newNode.setNextNode(this.head); //this.head holds a node too not value
            this.head = newNode;
            return;
        } else {
            let currentTraverseNode = this.head;
            for (let i=0; i< index-1; i++){
                // we are not going to index, but 2 nodes b4 index
                if (currentTraverseNode == null){
                    throw new Error("check length of linked list, invalid index position");
                }
                // we will get the node just b4 the index
                currentTraverseNode = currentTraverseNode.getNextNode();
            }
            newNode.setNextNode(currentTraverseNode.getNextNode());
            currentTraverseNode.setNextNode(newNode);
            console.log(`successful insertion of new node at index ${index}`);
            return;
        }
    }

    deleteAtIndex(index){
        if (index < 0){
            throw new Error ("Index cannot be less than 0");
        }
        else if (this.head == null){
            throw new Error ("No node to delete in linked list");
        }
        else if (index === 0 && this.head !== null){
            this.head = this.head.getNextNode();
        } 
        else {
            let currentNode = this.head;
            for (let i=0; i < index - 1 && currentNode.getNextNode(); i++){
                currentNode = currentNode.getNextNode();
            }
            if (currentNode.getNextNode().getNextNode()){
                currentNode.setNext(currentNode.getNextNode().getNextNode())
                return;
            }
            else if (currentNode.getNextNode()){
                currentNode.setNextNode(null);
            } 
            else {
                throw new Error("Index out of range");
            }
        }
    }

    forEach(externalFunction){
        let currentNode = this.head;
        while (currentNode != null){
            externalFunction(currentNode);
            currentNode = currentNode.getNextNode();
        }
    }

    printLinkList(){
        let currentNode = this.head;
        while (currentNode != null){
            console.log("node value => ", currentNode.getNodeValue());
            if (currentNode.getNextNode()){
                console.log("next node value => ", currentNode.getNextNode().getNodeValue());
            } else {
                console.log("next node value => null");
            }
            currentNode = currentNode.getNextNode();
        }
    }

    findByIndex(index){
        let currentNode = this.head;
        for (let i=0; i<index; i++){
            currentNode = currentNode.getNextNode();
        }
        console.log(`Node found at index ${index}, its value is ${currentNode.getNodeValue()}. Node object is returned.`);
        return currentNode;
    }
    // only for singly linked list and non-circular

    length(){
        let currentNode = this.head;
        let length = 0;
        while (currentNode != null){
            currentNode = currentNode.getNextNode();
            length ++            
        }
        console.log("length of singly linked list => ", length);
        return length;
    }
}

class DoublyLinkedList {

    constructor(head = null){
        this.head = head;
    }

    push(data){
        if (this.head === null){
            this.head = new Node(data);
            console.log("pushed as head");
        } else {
            let currentNode = this.head;
            while (currentNode.getNextNode() !== null){
                currentNode = currentNode.getNextNode();
            }
            currentNode.setNextNode(new Node(data));
            currentNode.getNextNode().setPreviousNode(currentNode);
            console.log("pushed new node");
        }
    }

    shift(){
        if (this.head === null){
            throw new Error("No first node to delete in doubly linked list")
        } else {
            this.head = this.head.getNextNode();
            if (this.head !== null){
                this.head.setPreviousNode(null);
            }
        }
    }

    insertAtIndex(index, value){
        if (index < 0){
            throw new Error("Index cannot be less than 0");
        }
        else if (index === 0 && this.head === null){
            this.head = new Node(value);
            return;
        }
        else if (index === 0 && this.head !== null){
            this.head.setNextNode(this.head); //this is possible because the node has the .next itself stored
            this.head = new Node(value);    
            return;
        }
        else {
            let currentNode = this.head;
            for (let i=0; i<index-1; i++){
                if (currentNode == null){
                    throw new Error("Index out of range")
                }
                currentNode = currentNode.getNextNode(); // now at index - 1
            }
            let nodeAfterInsertion = currentNode.getNextNode();
            currentNode.setNextNode(new Node(value));
            currentNode.getNextNode().setPreviousNode(currentNode);
            currentNode.getNextNode().setNextNode(nodeAfterInsertion);
            return;
        }
    }

    deleteAtIndex(index){
        if (index < 0) {
            throw new Error ("Index cannot be less than 0");
        }
        else if (index == 0 && this.head === null){
            throw new Error ("No node to delete, doubly link list is empty");
        }
        else if (index == 0 && this.head !== null && this.head.getNextNode() === null){
            let currentNode = this.head;
            this.head = currentNode.setNextNode(currentNode.getNextNode());
            currentNode.getNextNode().setPreviousNode(null);
            return;
        } else {
            let currentNode = this.head;
            for (let i=0; i<index-1; i++){
                if (currentNode === null){
                    throw new Error("Index out of range");
                }
                currentNode = currentNode.getNextNode();
            }
            currentNode.setNextNode(currentNode.getNextNode().getNextNode());
            currentNode.getNextNode().setPreviousNode(currentNode);
            return;
        }
    }

    forEach(externalFunction){
        let currentNode = this.head;
        while (currentNode != null){
            externalFunction(currentNode);
            currentNode = currentNode.getNextNode();
        }
    }

    printLinkList(){
        let currentNode = this.head;
        while (currentNode !== null){

            if (currentNode.getPreviousNode() === null){
                console.log("previous node value => null");
            } 
            else {
                console.log("previous node value => ", currentNode.getPreviousNode().getNodeValue());
            }

            console.log("node value => ", currentNode.getNodeValue());

            if (currentNode.getNextNode() !== null){
                console.log("next node value => ", currentNode.getNextNode().getNodeValue());
            }
            else {
                console.log("next node value => null");
            }

            currentNode = currentNode.getNextNode();
        }
    }

    findByIndex(index){
        let currentNode = this.head;
        for (let i=0; i<index; i++){
            currentNode = currentNode.getNextNode();
        }
        console.log(`Node found at index ${index}, its value is ${currentNode.getNodeValue()}. The node before it has value of ${currentNode.getPreviousNode().getNodeValue()}. Node object is returned.`);
        return currentNode;
    }

    length(){
        let currentNode = this.head;
        let length = 0;
        while (currentNode != null){
            currentNode = currentNode.getNextNode();
            length ++            
        }
        console.log("length of doubly linked list => ", length);
        return length;
    }
}

// Simple Testing of SinglyLinkedList w/o test cases // uncomment to test
// let hello1 = new SinglyLinkedList;
// hello1.push(1);
// hello1.push(2);
// hello1.insertAtIndex(1,5);
// hello1.insertAtIndex(2,6);
// hello1.shift();
// hello1.deleteAtIndex(2);
// hello1.printLinkList();
// hello1.length();
// console.log(hello1.findByIndex(1));

// // Simple Testing of DoublyLinkedList w/o test cases //
// let hello1 = new DoublyLinkedList;
// hello1.push(1);
// hello1.push(2);
// hello1.push(3);
// hello1.insertAtIndex(2,4);
// hello1.insertAtIndex(4,5);
// hello1.shift();
// hello1.printLinkList();
// hello1.length();
// hello1.deleteAtIndex(0);
// hello1.length();
// hello1.printLinkList();


module.exports = {SinglyLinkedList, DoublyLinkedList};