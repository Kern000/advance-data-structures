class Node {

    constructor(value, next=null, previous=null){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    setNodeValue(value){
        this.value=value;
        console.log("Set this node value as ", this.value);
    }

    // expects node object
    setNextNode(next){
        this.next=next;
        console.log("Set next node as ", this.next);
    }

    // this gets value only
    getNodeValue(){
        console.log("This node obj's value is ", this.value);
        return this.value;
    }

    // gets node object
    getNextNode(){
        console.log("next node obj is ", this.next);
        return this.next;
    }

    getPreviousNode(){
        console.log("Previous node is ", this.previous);
        return this.previous;
    }

    setPreviousNode(node){
        this.previous = node;
        console.log("Set previous node as => ", node.value);
    }
}

module.exports = Node;