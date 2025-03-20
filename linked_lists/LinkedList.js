import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }
    // adds a new node containing value to the end of the list
    append(value) {
        let newNode = new Node(value);

        if (!this.listHead) {
            this.listHead = newNode;
            return;
        }

        let tmp = this.listHead;
        while (tmp.nextNode) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = newNode;
    }

    //adds a new node containing value to the start of the list
    prepend(value) {
        let newNode = new Node(value, this.listHead);
        this.listHead = newNode;
    }
    
    // returns the total number of nodes in the list
    size() {
        let counter = 0;
        let tmp = this.listHead;
        while (tmp) {
            counter++;
            tmp = tmp.nextNode;
        }

        return counter;
    }

    // returns the first node in the list
    head() {
        return this.listHead;
    }
    // returns the last node in the list
    tail() {
        if (!this.listHead) return null;

        let tmp = this.listHead;
        while (tmp.nextNode) {
            tmp = tmp.nextNode;
        }

        return tmp;
    }
    // returns the node at the given index
    at(index) {
        let counter = 0;
        if (!this.listHead) return null;

        let tmp = this.listHead;

        while (tmp) {
            if (counter == index) {
                return tmp;
            }

            counter++;
            tmp = tmp.nextNode;
        }
        return null;
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        if (!this.listHead) return false;

        let tmp = this.listHead;
        while (tmp) {
            if (value == tmp.value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    // returns the index of the node containing value, or null if not found.
    find(value){
        if (!this.listHead) return null;

        let index = 0;
        let tmp = this.listHead;
        while(tmp){
            if(tmp.value === value) return index
            index++;
            tmp = tmp.nextNode;
        }
        return null;
    }
}
