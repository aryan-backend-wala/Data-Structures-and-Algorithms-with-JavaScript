import { print } from "../Stack/utils.js";

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    var currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      print(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next === null) &&
      (currNode.next.element !== item)) {
      currNode = currNode.next
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item)
    if(!(prevNode.next === null)){
      prevNode.next = prevNode.next.next;
    }
  }
}


