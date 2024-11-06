export class Set {
  constructor(){
    this.dataStore = [];
  }

  add(data) {
    if(this.dataStore.indexOf(data) < 0){
      this.dataStore.push(data)
      return true
    }
    return false
  }

  remove(data) {
    let pos = this.dataStore.indexOf(data)
    if(pos > -1){
      this.dataStore.splice(pos, 1)
      return true
    }
    return false;
  }

  show() {
    return this.dataStore;
  }

  contains(data){
    if(this.dataStore.indexOf(data) > -1){
      return true
    }
    return false
  }

  union(set){
    const tempSet = new Set();
    for(let item of this.dataStore){
      tempSet.add(item)
    }
    for(let item of set.dataStore){
      if(!tempSet.contains(item)){
        tempSet.dataStore.push(item)
      }
    }
    return tempSet
  }

  intersect(set) {
    let tempSet = new Set()
    for(let item of this.dataStore){
      if(set.contains(item)){
        tempSet.add(item)
      }
    }
    return tempSet
  }

  size(){
    return this.dataStore.length
  }

  subset(set){
    if(this.size() > set.size()){
      return false
    }
    else {
      for(let member of this.dataStore){
        if(!set.contains(member)){
          return false
        }
      }
    }
    return true
  }

  difference(set){
    let tempSet = new Set();
    for(let member of this.dataStore){
      if(!set.contains(member)){
        tempSet.add(member)
      }
    }
    return tempSet
  }
}