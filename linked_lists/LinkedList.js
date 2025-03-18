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

    tail(){
        if (!this.listHead) return null;

        let tmp = this.listHead;
        while(tmp.nextNode){
            tmp = tmp.nextNode;
        }

        return tmp;
    }

    at(index){
        let counter = 0;
        if (!this.listHead) return null; 
        
        let tmp = this.listHead;

        while(tmp){
            if(counter == index){
                return tmp;
            }

            counter++;
            tmp = tmp.nextNode;
        }
        return null;
    }
}
