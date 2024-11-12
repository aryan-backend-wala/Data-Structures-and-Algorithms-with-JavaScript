import { BST } from "./BST.js";
import { print } from "../Stack/utils.js"

const nums = new BST();
nums.insert(23);
nums.insert(16);
nums.insert(45);
nums.insert(3);
nums.insert(22);
nums.insert(37);
nums.insert(99);
// nums.root.left = null : to remove child node
// let node = nums.root.left.left; : to remove node which contain one child node
// nums.root.left = node
// let node = nums.root;
// let smallestNode = node.right.left
// node.data = smallestNode.data;
// node.right.left = null;
nums.remove(23)
print(nums.root);