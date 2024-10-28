import { Stack } from "./Stack.js";

function mulBase(num, base){
  const s = new Stack()
  do {
    s.push(num % base);
    num = Math.floor(num /= base)
  } while (num > 0)
  let converted = ''
  while(s.length() > 0){
    converted += s.pop();
  }
  return converted;
}

function isPalindrome(word){
  const letters = word.split('');
  const s = new Stack();
  for(let letter of letters){
    s.push(letter);
  }
  let reverseWord = '';
  while(s.length() > 0){
    reverseWord += s.pop();
  }
  return word === reverseWord ? true : false
}

export function print(msg){
  console.log(msg)
}

function fact(num){
  const s = new Stack();
  for(let i=num;i>=1;i--){
    s.push(i);
  }
  let product = 1;
  while(s.length() > 0){
    product *= s.pop()
  }
  return product
}

const utils = {
  mulBase,
  isPalindrome,
  fact
}

export default utils