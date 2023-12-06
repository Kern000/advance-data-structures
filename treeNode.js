// link list is linear and methods are linear, though very similar, tree utilizes diff methods

class TreeNode {
    constructor(data){
        this.data = data;
        this.parent = null; //linkedlist head
        this.children = []; //rather than this.next, resembles more like a graph adjlist
    }

    addChild(childNode){
        childNode.parent = this;
        this.children.push(childNode);
    }

    removeChild(targetedData){
        for (let child of this.children){
            if (child.data == targetedData){
                let indexToDelete = this.children.indexOf(child);
                this.children.splice(indexToDelete, 1);
                console.log("After deleting, children tt remains: ", this.children);
            }
        }
    }

    updateChild(targetedData, dataToUpdate){
        for (let child of this.children){
            if (child.data == targetedData){
                let indexToUpdate = this.children.indexOf(child);
                this.children[indexToUpdate].data = dataToUpdate;
                console.log("After updating, children are as follows: ", this.children);
            }
        }

    }   

    printAsCategory(){
        if (this.parent == null){
            console.log(`\n*** Root here: ***\n \nData: ${this.data}`);
        }
        if (this.children.length > 0){
            console.log(`\nChildren of ${this.data} as follows: \n`)
        }
        for (let child of this.children){
            console.log(`|_ Data: ${child.data}`);
        }
        for (let child of this.children){
            child.printTree();
        }  
    }

   
    printAsTree(indent='  '){
        if (this.parent == null){
            console.log(`\n*** Root here: ***\n${this.data}`);
        } else {
            console.log(`${indent}|_ ${this.data}`);
        }
        if (this.children.length > 0){
            for (let child of this.children){
                child.printAsTree(indent + '  ');
            }
        }
    }

    printSingleNodeWithChildren(){
        console.log(this.data)
        if (this.children.length > 0){
            for (let child of this.children){
                console.log(`|_ ${child.data}`)
            }
        }
    }
}

// // ============== For test ==============

// function treeDataSeeding(){

//     // root
//     const root = new TreeNode("Consumer Electronics");

//     const mobilePhone = new TreeNode("Mobile Phone");
//     const tablet = new TreeNode("Tablet");
//     const personalComputer = new TreeNode("Personal Computer");

//     root.addChild(mobilePhone);
//     root.addChild(tablet);
//     root.addChild(personalComputer);

//     const iPhone = new TreeNode("iPhone");
//     const android = new TreeNode("Android");
//     const sony = new TreeNode("Sony");
    
//     mobilePhone.addChild(iPhone);
//     mobilePhone.addChild(android);
//     mobilePhone.addChild(sony);

//     tablet.addChild(new TreeNode("iPad"));
//     tablet.addChild(new TreeNode("Galaxy Tab"));

//     personalComputer.addChild(new TreeNode("Dell"));
//     personalComputer.addChild(new TreeNode("HP"));
//     personalComputer.addChild(new TreeNode("Asus"));

//     sony.addChild(new TreeNode("Xperia"));
//     sony.addChild(new TreeNode("Xperia 2"));
//     android.addChild(new TreeNode("Samsung Ace"));
//     iPhone.addChild(new TreeNode("iPhone 4"));

//     root.printAsTree()
//     sony.printSingleNodeWithChildren();

//     mobilePhone.removeChild("Sony")
//     mobilePhone.updateChild("Android", "Sony11");

//     return root;
// }

// treeDataSeeding();
// // ============== testing end ==============



module.exports = TreeNode;