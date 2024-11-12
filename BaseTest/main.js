import { CArray } from "./CArray.js";

const numElements = 100000;
const nums = new CArray(numElements);
nums.setData();
let start = new Date().getTime();
nums.shellsort();
let stop = new Date().getTime();
let elapsed = stop - start;
print("Shellsort with hard-coded gap sequence: " + elapsed + " ms.");
nums.clear();
nums.setData();
start = new Date().getTime();
nums.shellsortD();
stop = new Date().getTime();
elapsed = stop - start
print("Shellsort with dynamic gap sequence: " + elapsed + " ms.");

function print(msg) {
  console.log(msg)
}