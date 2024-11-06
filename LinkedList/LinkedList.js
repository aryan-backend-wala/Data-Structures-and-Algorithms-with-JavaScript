import { print } from "../Stack/utils.js";

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
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
    newNode.previous = current
    current.next = newNode;
  }

  display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      print(currNode.next.element);
      currNode = currNode.next;
    }
  }

  // findPrevious(item) {
  //   let currNode = this.head;
  //   while (!(currNode.next === null) &&
  //     (currNode.next.element !== item)) {
  //     currNode = currNode.next
  //   }
  //   return currNode;
  // }

  remove(item) {
    let currNode = this.find(item)
    if (!currNode.next !== null) {
      currNode.previous.next = currNode.next
      currNode.next.previous = currNode.previous
      currNode.next = null
      currNode.previous = null
    }
  }

  findLast() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      currNode = currNode.next
    }
    return currNode;
  }

  dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
      print(currNode.element);
      currNode = currNode.previous;
    }
  }
}


