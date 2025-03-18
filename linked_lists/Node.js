export default class Node {
  constructor(value, nextNode = null) {
    this.value = value || null;
    this.nextNode = nextNode;
  }
}
