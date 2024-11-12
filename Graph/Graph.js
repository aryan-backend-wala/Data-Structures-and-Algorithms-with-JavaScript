import { print } from "./main.js";

class Vertex {
  constructor(label) {
    this.label = label;
  }
}

export class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.vertexList = [];
    for (let i = 0; i < this.vertices; ++i) {
      this.adj[i] = []; // Initialize as an empty array without any strings
    }
    this.marked = [];
    this.edgeTo = [];
    for (let i = 0; i < this.vertices; i++) {
      this.marked[i] = false;
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    const visited = new Set(); // Use a Set to avoid duplicates

    for (let i = 0; i < this.vertices; ++i) {
      console.log(this.vertexList[i] + " -> ");

      for (let j = 0; j < this.adj[i].length; ++j) {
        const neighbor = this.adj[i][j];
        if (neighbor !== "" && !visited.has(this.vertexList[neighbor])) {
          console.log(this.vertexList[neighbor] + ' ');
        }
      }

      console.log(); // Move to the next line after each vertex
      visited.add(this.vertexList[i]);
    }
  }

  dfs(v) {
    console.log(`Starting DFS at vertex: ${v}`);
    this.marked[v] = true;
    console.log(`Visited vertex: ${v}`);

    for (let w of this.adj[v]) {
      w = parseInt(w);
      if (!this.marked[w]) {
        console.log(`Vertex ${v} -> Going to vertex ${w}`);
        this.dfs(w);
      } else {
        console.log(`Vertex ${v} -> Vertex ${w} already visited`);
      }
    }

    console.log(`Completed DFS call at vertex: ${v}`);
  }

  bfs(s) {
    const queue = [];
    this.marked[s] = true;
    console.log(`Starting BFS from vertex: ${s}`);
    queue.push(s);

    while (queue.length > 0) {
      let v = queue.shift();
      console.log(`Dequeued vertex: ${v}`);
      console.log(`Visited vertex: ${v}`);

      for (let w of this.adj[v]) {
        w = parseInt(w); // Ensure w is treated as an integer
        if (!this.marked[w]) {
          console.log(`Vertex ${v} -> Enqueueing vertex ${w}`);
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        } else {
          console.log(`Vertex ${v} -> Vertex ${w} already visited`);
        }
      }
      console.log('Edge to: ', this.edgeTo)
    }
    console.log(`Completed BFS from starting vertex: ${s}`);
  }

  pathTo(source, v) {
    console.log(`Checking path from source ${source} to vertex ${v}`);
    if (!this.hasPathTo(v)) {
      console.log(`No path found to vertex ${v}`);
      return undefined;
    }

    const path = [];
    for (let i = v; i !== source; i = this.edgeTo[i]) {
      console.log(`Adding vertex ${i} to path`);
      path.push(i);
    }

    console.log(`Adding source vertex ${source} to path`);
    path.push(source); // Add the source at the end

    const finalPath = path.reverse(); // Reverse to get path from source to v
    console.log(`Path found from ${source} to ${v}: ${finalPath}`);
    return finalPath;
  }

  hasPathTo(v) {
    const hasPath = this.marked[v];
    console.log(`Checking if path exists to vertex ${v}: ${hasPath ? 'Yes' : 'No'}`);
    return hasPath;
  }

  topSort() {
    const stack = [];
    const visited = Array(this.vertices).fill(false);
  
    console.log('Starting topological sort...');
    
    // Visit each vertex
    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i]) {
        console.log(`Visiting vertex ${i}`);
        this.topSortHelper(i, visited, stack);
      }
    }
  
    // Print vertices in topological order
    console.log('Topological order of vertices:');
    while (stack.length > 0) {
      const vertexIndex = stack.pop();
      console.log(this.vertexList[vertexIndex]);
    }
  }
  
  topSortHelper(v, visited, stack) {
    console.log(`Visiting vertex ${v} in helper function`);
    visited[v] = true;
  
    // Explore each adjacent vertex that hasn't been visited
    for (const w of this.adj[v]) {
      if (w !== "" && !visited[w]) {
        console.log(`Vertex ${v} has an unvisited neighbor ${w}. Recursively visiting...`);
        this.topSortHelper(w, visited, stack);
      }
    }
  
    // Push the current vertex to the stack only after all neighbors are visited
    console.log(`All neighbors of vertex ${v} are visited. Pushing vertex ${v} to the stack`);
    stack.push(v);
  }
}
