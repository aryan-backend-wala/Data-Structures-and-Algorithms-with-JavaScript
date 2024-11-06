export class HashTable {
  constructor() {
    this.table = new Array(137)
  }

  simpleHash(data) {
    let total = 0;
    for(let i=0;i<data.length;i++){
      total += data.charCodeAt(i);
    }
    return total % this.table.length
  }

  showDistro(){
    let n = 0;
    for(let i=0;i<this.table.length;i++){
      if(this.table[i][0] !== undefined){
        console.log(i + ": " + this.table[i]);
      }
    }
  }

  betterHash(string){
    const H = 37;
    let total = 0;
    for(let i=0;i<string.length;i++){
      total += H * total + string.charCodeAt(i)
    }
    total = total % this.table.length;
    if(total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total)
  }

  put(key, data){
    let pos = this.betterHash(key);
    let index = 0
    if(this.table[pos][index] === undefined){
      this.table[pos][index + 1] = data;
    }
    else {
      while(this.table[pos][index] !== undefined){
        ++index;
      }
      this.table[pos][index] = data;
    }
    ++index;  
  }

  get(key) {
    return this.table[this.betterHash(key)];
  }

  buildChains(){
    for(let i=0;i<this.table.length;i++){
      this.table[i] = new Array();
    }
  }
}