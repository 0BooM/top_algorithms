import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


list.prepend("balbala");

console.log(list);
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
list.pop();
console.log(list.contains("cat"));
console.log(list.find("dog"));
console.log(list.toString());
list.insertAt("pinokio", 2);
console.log(list.toString());
list.removeAt(7);
console.log(list.toString());