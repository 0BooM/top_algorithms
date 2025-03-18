import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

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

  prepend(value) {
    let newNode = new Node(value, this.listHead);
    this.listHead = newNode;
  }
}
