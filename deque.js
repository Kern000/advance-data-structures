// deque = double ended queue;

class Deque {
    constructor(){
        this.items = []; //define item property
    }

    addFront(element){
        this.items.unshift(element);
    }

    addBack(element){
        this.items.push(element);
    }

    isEmpty(){
        return this.items.length === 0;
    }

    removeFront(){
        if(this.isEmpty()){
            throw new Error("Deque is empty");
        }
        return this.items.shift();
    }

    removeBack(){
        if(this.isEmpty()){
            throw new Error("Deque is empty");
        }
        return this.items.pop();
    }

    viewFront(){
        if(this.isEmpty()){
            throw new Error("Deque is empty");
        }
        return this.items[0];
    }

    viewBack(){
        if(this.isEmpty()){
            throw new Error("Deque is empty");
        }
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }

}

// Testing starts //
const deque1 = new Deque();
deque1.addFront(3);
deque1.addFront(3);

deque1.addBack(2);
deque1.addFront(0);

console.log("front=> ", deque1.viewFront());
console.log("back=> " + deque1.viewBack()); //concat string
console.log(deque1.size());

deque1.removeFront();
console.log(deque1.size());
console.log(deque1);
// Testing ends //

module.exports= Deque;
