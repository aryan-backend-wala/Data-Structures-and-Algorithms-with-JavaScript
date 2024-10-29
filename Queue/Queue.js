export class Queue {
  constructor(){
    this.datastore = [];
  }

  enqueue(element){
    this.datastore.push(element)
  }

  dequeue(){
    return this.datastore.shift();
  }

  front(){
    return this.datastore[0]
  }

  back(){
    return this.datastore[this.datastore.length - 1]
  }

  toString(){
    let retStr = '';
    for(let i=0;i<this.datastore.length;i++){
      retStr += this.datastore[i] + "\n";
    }
    return retStr;
  }

  empty(){
    if(this.datastore.length === 0){
      return true
    } else {
      return false;
    }
  }

  count(){
    return this.datastore.length
  }
}