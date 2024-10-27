import List from "./List.js";

const names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

// names.front(); // Start at the beginning
// do {
//   console.log(names.getElement());
// } while (names.next() !== null); 


// for(names.end(); names.prev() !== null;){
//   print(names.currPos())
//   print(names.getElement())
// }

// names.end()
// names.prev()
// names.prev()
// names.prev()
// print(names.getElement())

function print(msg) {
  console.log(msg)
}