import { Graph } from "./Graph.js";

const g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ["CS1", "CS2", "Data Structures",
 "Assembly Language", "Operating Systems",
 "Algorithms"];

// g.showGraph();
g.topSort();



// for (let v = 0; v < g.vertices; v++) {
//   if (g.hasPathTo(v)) {
//     console.log(`Path from 0 to ${v}: ${g.pathTo(0, v).join(" -> ")}`);
//   } else {
//     console.log(`No path from 0 to ${v}`);
//   }
// }

// if (g.hasPathTo(4)) {
//   console.log(`Shortest path from 3 to 4: ${g.pathTo(3, 4).join(" -> ")}`);
// } else {
//   console.log("No path from 3 to 4");
// }

export function print(msg) {
  console.log(msg)
}