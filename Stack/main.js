import { Stack } from "./Stack.js";
import _, { print } from './utils.js'
// const s = new Stack();

// s.push("David");
// s.push("Raymond");
// s.push("Bryan");

// print("length: " + s.length());

// print(s.peek());

// var popped = s.pop();

// print("The popped element is: " + popped);

// print(s.peek());

// s.push("Cynthia");

// print(s.peek())

// s.clear();

// print("length: " + s.length());

// print(s.peek());

// s.push("Clayton");
// print(s.peek());





var num = 2;
var base = 2;

// var newNum = mulBase(num, base)
// print(num + " converted to base " + base + " is " + newNum);



// var word = "hello";
// if (isPalindrome(word)) {
//  print(word + " is a palindrome.");
// }
// else {
//  print(word + " is not a palindrome.");
// }
// word = "racecar"
// if (isPalindrome(word)) {
//  print(word + " is a palindrome.");
// }
// else {
//  print(word + " is not a palindrome.");
// }

function unbalanced(expression) {
  const exp = expression.split('')
  const s = new Stack();
  for (let i = 0; i < exp.length; i++) {
    const char = expression[i];

    if (char === '(') {
      s.push(i); // Store the position of the opening parenthesis
    } else if(char === ')'){
      if(s.length() === 0){
        return `Unmatched ')' at position ${i}`;
      }
      s.pop();
    }
  }
  if (s.length() > 0) {
    return `Unmatched '(' at position ${s.peek()}`;
  }
  return "Parentheses are balanced.";
  console.log(s)
}

const str = '2.3 + (23 / 12'

console.log(unbalanced(str))