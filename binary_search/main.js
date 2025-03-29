import Tree from "./Tree.js";

function randomArray(size = 10, max = 100) {
    const arr = [];
    while (arr.length < size) {
        const num = Math.floor(Math.random() * max);
        if (!arr.includes(num)) arr.push(num);
    }
    return arr;
}
const tree = new Tree(randomArray(15));

tree.prettyPrint();

console.log("Balanced?", tree.isBalanced());

// Traversals

console.log("Level Order:");
tree.levelOrder((node) => console.log(node.value));

console.log("Pre Order:");
tree.preOrder((node) => console.log(node.value));

console.log("In Order:");
tree.inOrder((node) => console.log(node.value));

console.log("Post Order:");
tree.postOrder((node) => console.log(node.value));


// Unbalance tree by inserting > 100
tree.insert(150);
tree.insert(200);
tree.insert(250);
tree.insert(300);
tree.insert(400);

console.log("After unbalancing:");
tree.prettyPrint();
console.log("Balanced?", tree.isBalanced());

// Rebalance
tree.rebalance();
console.log("After rebalancing:");
tree.prettyPrint();
console.log("Balanced?", tree.isBalanced());

// Traversals again
console.log("Level Order (after rebalance):");
tree.levelOrder((node) => console.log(node.data));