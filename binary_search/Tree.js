import Node from "./Node.js";

export default class Tree {
    constructor(array) {
        this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b));
    }

    buildTree(array) {
        if (array.length === 0) return null;

        let midIndex = Math.floor(array.length / 2);
        let node = new Node(array[midIndex]);
        node.left = this.buildTree(array.slice(0, midIndex));
        node.right = this.buildTree(array.slice(midIndex + 1));

        return node;
    }

    
    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;

        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    }
}
