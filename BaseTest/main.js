import { CArray } from "./CArray.js";

const numElements = 6;
const nums = new CArray(numElements);
nums.setData()
print(nums.toString())
nums.mergeSort()
print(nums.toString())


function print(msg) {
  console.log(msg)
}