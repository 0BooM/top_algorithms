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

    insert(value, node = this.root){
        if(!node) return new Node(value);

        if(value < node.value){
            node.left = this.insert(value, node.left);
        }
        if(value > node.value){
            node.right = this.insert(value, node.right);
        }
        return node;
    }

    deleteItem(value, node = this.root){
        if(!node) return null;

        if(value < node.value){
            node.left = this.deleteItem(value, node.left);
        } else if(value > node.value){
            node.right = this.deleteItem(value, node.right);
        } else{
            if(!node.left && !node.right) return null
            if(!node.left) return node.right;
            if(!node.right) return node.left;

            let current = node.right;
            while(current.left) current = current.left;

            node.value = current.value;

            node.right = this.deleteItem(current.value, node.right)
        }
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
