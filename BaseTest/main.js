import { CArray } from "./CArray.js";

const numElements = 100000;
const nums = new CArray(numElements);
nums.setData()
const start = new Date().getTime()
nums.mergeSort()
const stop = new Date().getTime();
const elapsed = stop - start;
print("Shellsort with dynamic gap sequence: " + elapsed + " ms.");


function print(msg) {
  console.log(msg)
}