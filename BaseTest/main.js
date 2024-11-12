import { CArray } from "./CArray.js";

const numElements = 100000;
const nums = new CArray(numElements);
nums.setData();
let start = new Date().getTime();
nums.shellsort();
let stop = new Date().getTime();
let elapsed = stop - start;
print("Elapsed time for the insertion sort on " +
  numElements + " elements is: " + elapsed + " milliseconds.");


function print(msg) {
  console.log(msg)
}