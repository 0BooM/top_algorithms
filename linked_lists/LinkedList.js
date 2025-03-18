import Node from "./Node";

class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (!this.listHead) {
      this.listHead = new Node(value);
      return;
    }

    let tmp = this.listHead;
    while (tmp.nextNode) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(value);
  }
}
