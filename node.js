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
    }

    // this gets value only
    getNodeValue(){
        return this.value;
    }

    // gets node object
    getNextNode(){
        return this.next;
    }

    getPreviousNode(){
        return this.previous;
    }

    setPreviousNode(node){
        this.previous = node;
    }
}

module.exports = Node;