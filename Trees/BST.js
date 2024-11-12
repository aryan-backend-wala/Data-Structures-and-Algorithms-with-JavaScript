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
    const n = new Node(data, null, null);

    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;

      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;

          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;

          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show())
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.show())
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show())
    }
  }

  getMin() {
    let current = this.root;
    while (!(current.left === null)) {
      current = current.left
    }
    return current.data
  }

  getMax() {
    let current = this.root;
    while (!(current.right === null)) {
      current = current.right
    }
    return current.data
  }

  smallestNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  search(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  remove(data) {
    console.log(`Attempting to remove ${data} from the tree.`); 
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      console.log(`Node with data ${data} not found.`);
      return null;
    }

    if (data === node.data) {
      console.log(`Found node with data ${data}.`);

      // Case 1: Node with no children
      if (node.left === null && node.right === null) {
        console.log(`Node with data ${data} is a leaf node. Removing it.`);
        return null;
      }

      // Case 2: Node with only one child
      if (node.left === null) {
        console.log(`Node with data ${data} has only a right child. Replacing it with right child.`);
        return node.right;
      }
      if (node.right === null) {
        console.log(`Node with data ${data} has only a left child. Replacing it with left child.`);
        return node.left;
      }

      // Case 3: Node with two children
      console.log(`Node with data ${data} has two children. Finding minimum in the right subtree for replacement.`);
      let tempNode = this.smallestNode(node.right);
      console.log(`Replacing data of node to be deleted with ${tempNode.data}.`);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      console.log(`${data} is less than ${node.data}. Moving to the left child.`);
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      console.log(`${data} is greater than ${node.data}. Moving to the right child.`);
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}