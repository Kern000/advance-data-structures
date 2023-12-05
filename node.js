class Node {

    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

    setNodeValue(newValue){
        this.value=newValue;
    }

    setNodeNext(next){
        this.next=next;
    }

    getNodeValue(){
        return this.value;
    }

    getNodeNext(){
        return this.next;
    }
}

module.exports = Node;