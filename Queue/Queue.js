export class Queue {
  constructor() {
    this.datastore = [];
  }

  enqueue(element) {
    this.datastore.push(element)
  }

  dequeue() {
    let priority = this.datastore[0].code;
    console.log('starting priority', priority)
    for (let i = 1; i < this.datastore.length; i++) {
      if (this.datastore[i].code < priority) {
        priority = i;
        console.log('priority', priority)
      }
    }
    return this.datastore.splice(priority, 1)
  }

  front() {
    return this.datastore[0]
  }

  back() {
    return this.datastore[this.datastore.length - 1]
  }

  toString() {
    let retStr = '';
    for (let i = 0; i < this.datastore.length; i++) {
      retStr += this.datastore[i].name + " code: "
        + this.datastore[i].code + "\n";

    }
    return retStr;
  }

  empty() {
    if (this.datastore.length === 0) {
      return true
    } else {
      return false;
    }
  }

  count() {
    return this.datastore.length
  }
}