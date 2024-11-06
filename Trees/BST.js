class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    console.log(`Inserting ${data} into the tree.`);
    const n = new Node(data, null, null);
  
    if (this.root === null) {
      this.root = n;
      console.log(`Inserted ${data} as the root node.`);
    } else {
      let current = this.root;
      let parent;
  
      while (true) {
        parent = current;
        console.log('Current: ', current)
        if (data < current.data) {
          console.log(`${data} is less than ${current.data}. Moving to the left child.`);
          current = current.left;
          
          if (current === null) {
            parent.left = n;
            console.log(`Inserted ${data} as the left child of ${parent.data}.`);
            break;
          }
        } else {
          console.log(`${data} is greater than or equal to ${current.data}. Moving to the right child.`);
          current = current.right;
  
          if (current === null) {
            parent.right = n;
            console.log(`Inserted ${data} as the right child of ${parent.data}.`);
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    console.log('Node: ', node)
    if (node !== null) {
      this.inOrder(node.left);
      console.log(`Visiting node with data: ${node.show()}`);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    console.log('Node: ', node);
    if(node !== null){
      console.log(`Visiting node with data: ${node.show()}`);
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  postOrder(node){
    console.log("Node :", node);
    if(node !== null){
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(`Visiting node with data: ${node.show()}`);
    }
  }

  getMin(){
    let current = this.root;
    while(!(current.left !== null)){
      current = current.left
    }
    return current.data
  }
}