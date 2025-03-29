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

    insert(value, node = this.root) {
        if (!node) return new Node(value);

        if (value < node.value) {
            node.left = this.insert(value, node.left);
        }
        if (value > node.value) {
            node.right = this.insert(value, node.right);
        }
        return node;
    }

    deleteItem(value, node = this.root) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.deleteItem(value, node.left);
        } else if (value > node.value) {
            node.right = this.deleteItem(value, node.right);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let current = node.right;
            while (current.left) current = current.left;

            node.value = current.value;

            node.right = this.deleteItem(current.value, node.right);
        }
        return node;
    }

    find(value, node = this.root) {
        if (!node) return node;
        if (node.value === value) return node;
        if (value < node.value) {
            return this.find(value, node.left);
        } else return this.find(value, node.right);
    }

    levelOrder(callback) {
        if (!callback) throw new Error("Callback required!");
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            callback(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    inOrder(callback, node = this.root) {
        if (!callback) throw new Error("Callback required!");
        if (!node) return;
        this.inOrder(callback, node.left);
        callback(node);
        this.inOrder(callback, node.right);
    }

    preOrder(callback, node = this.root) {
        if (!callback) throw new Error("Callback required!");
        if (!node) return;
        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);
    }

    postOrder(callback, node = this.root) {
        if (!callback) throw new Error("Callback required!");
        if (!node) return;
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);
        callback(node);
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
