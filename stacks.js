// stack is LIFO;

class Stack {

    constructor() {
        this.items = [];
    }

    addOneToStack(element){
        this.items.push(element);
    }

    removeOneFromStack(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    viewTopOfStack(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length -1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    sizeOfStack(){
        return this.items.length;
    }

    clearStack(){
        this.items = []
    }

    addMultipleToStack(array){
        if (Array.isArray(array)){
            for (let value of array){
                this.items.push(value);
            }
            return this.items;
        } else {
            throw new Error("Argument not an array");
        }
    }
}

// testing start //
let stack1 = new Stack;
stack1.addOneToStack(5);
stack1.addMultipleToStack([1,2,3,4])
console.log(stack1.isEmpty());
console.log("Top of stack => ", stack1.viewTopOfStack());
console.log("Size of stack => ", stack1.sizeOfStack());
console.log(stack1);


// testing end //

module.exports = Stack;

