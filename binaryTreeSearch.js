// n = 8 if iteration reduce search space by 1/2 8 -> 4 -> 2 -> 1
// log(2) 8 = 3; Time complexity = O(log n);
// B-tree every level only 2, ternary-tree only 3
// Breadth first search, or depth first search (in order, pre order, post order);

class BinarySearchTreeNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addChild(data){
        if (data == this.data){
            console.log("Data is the same");
            return;
        }
        if (data < this.data){
            if (this.left){
                //not a leaf node, recursion to test next node, eventually it will place node left or right depending on comparison then
                this.left.addChild(data);
            } else {
                this.left = new BinarySearchTreeNode(data);
                // add Node here as it is leaf node
            }
        } else {
            if (this.right){
                this.right.addChild(data);
            } else {
                this.right = new BinarySearchTreeNode(data);
            }
        }
    }

    inOrderTraversal(){
        // basically sorts a tree in ascending order

        let traversePath = []; //this will build the traversal nodes
        // inOrderTraversal of dfs travels left tree, base node, right tree in tt order
        // visit left tree
        if (this.left){
            traversePath = [...traversePath, ...this.left.inOrderTraversal()];
        }
        // visit base
        // this triggers when recursion hits leaf node
        traversePath.push(this.data);
        // visit right tree
        if (this.right){
            traversePath = [...traversePath, ...this.right.inOrderTraversal()];
        }
        return traversePath;
    }

    preOrderTraversal(){
        let traversePath = [];

        // base node first
        traversePath.push(this.data);

        // left tree second
        if (this.left){
            traversePath = [...traversePath, ...this.left.preOrderTraversal()];
        }
        
        // right tree last
        if (this.right){
            traversePath = [...traversePath, ...this.right.preOrderTraversal()];
        }

        return traversePath;
    }

    postOrderTraversal(){
        let traversePath = [];

        // left tree first
        if (this.left){
            traversePath = [...traversePath, ...this.left.postOrderTraversal()];
        }
        
        // right tree 2nd
        if (this.right){
            traversePath = [...traversePath, ...this.right.postOrderTraversal()];
        }

        // base node last
        traversePath.push(this.data);

        return traversePath;
    }

    search(valueBeingSearched){
        if (valueBeingSearched === this.data){
            return true;
        }
        if (valueBeingSearched < this.data){
            if (this.left){
                return this.left.search(valueBeingSearched);
                // Need return. Unlike addChild which is just looking for correct pos to add node;
                // Without return, result of recursive call is lost. each recursive call contributes to the boolean result.
            } else {
                return false; //leaf node
            }
        }
        if (valueBeingSearched > this.data){
            if (this.right){
                return this.right.search(valueBeingSearched);
            } else {
                return false;
            }
        }
        return false;
    }

    breadthFirstTraversal() {

        console.log("BFS used");
        let result = [];
        let queue = [this]; // Initialize queue with root node
        console.log("BFS Queue length here", queue.length);

        while (queue.length > 0) {
            const currentTraversedNode = queue.shift(); // Dequeue node

            console.log("Node being shifted", currentTraversedNode.data);
            console.log("In while loop, BFS Queue length in pre adding", queue.length);

            result.push(currentTraversedNode.data); // clear current level first

            if (currentTraversedNode.left) {
                queue.push(currentTraversedNode.left); // Enqueue left child
                console.log("queue length after adding left: ", queue.length)
            }

            if (currentTraversedNode.right) {
                queue.push(currentTraversedNode.right); // Enqueue right child
                console.log("queue length after adding right: ", queue.length)
            }
        }

        return result;
    }
}

function buildBinaryTree(array){
    let root = new BinarySearchTreeNode(array[0])

    for (let i=1; i<=array.length-1; i++){
        root.addChild(array[i]);
    }
    return root;
}

function printBinaryTree(root, level = 0, prefix = "Root: ") {
    if (!root) {
        console.log("Tree is empty!");
        return;
    }

    if (level === 0) {
        console.log(prefix + root.data); //prints prefix Root and root data
    } else {
        console.log(".".repeat(level * 8) + `${prefix}${root.data}`);
    }

    if (root.left || root.right) {
        if (root.left) {
            printBinaryTree(root.left, level + 1, "Left: ");
        }
        if (root.right) {
            printBinaryTree(root.right, level + 1, "Right: ");
        }
    }
}

// // Testing Strings //
// let strings = ["hello", "how", "are", "you", "?"];
// let stringsTree1 = buildBinaryTree(strings);
// console.log(stringsTree1.inOrderTraversal());
// console.log(stringsTree1.search(12));
// console.log(stringsTree1.search("how"));
// console.log(stringsTree1.search("?"));
// console.log(stringsTree1.postOrderTraversal());
// console.log(stringsTree1.preOrderTraversal());
// // End of Testing Strings //

// // Testing Numbers and traversals //
// let numbers = [17,4,1,20,9,23,18,34];
// let numbersTree1 = buildBinaryTree(numbers);
// console.log(numbersTree1.search(12));
// console.log(numbersTree1.search(1));
// console.log(numbersTree1.search(18));
// console.log(numbersTree1.search(34));
// console.log(`inOrder sortedTree`, numbersTree1.inOrderTraversal()); // return in sorted
// console.log(`preOrder tree construction order`, numbersTree1.preOrderTraversal()); // prefix expression (polish notation)
// console.log(`postOrder tree reverse construction`, numbersTree1.postOrderTraversal()); // postfix expression (reverse polish notation)
// printBinaryTree(numbersTree1);
// console.log(`bfs / Level order traversal:`, numbersTree1.breadthFirstTraversal());
// // End of Testing Numbers and traversals //

// Time complexity of all depth first traversal is O(n), space O(log n)
// Time and space complexity of Level order traversal is both O(n)

module.exports={BinarySearchTreeNode, buildBinaryTree, printBinaryTree};
