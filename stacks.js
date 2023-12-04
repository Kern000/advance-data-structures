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
            let combinedStack = this.items.concat(array);
            return combinedStack;
        } else {
            throw new Error("Argument not an array");
        }
    }
}

export default Stack;
