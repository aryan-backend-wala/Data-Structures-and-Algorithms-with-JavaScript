import { Queue } from "./Queue.js";
import { print } from '../Stack/utils.js'
import fs from 'fs';

const q = new Queue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");

// print(q.toString())
// q.dequeue()
// print(q.toString())
// print("Front of queue: " + q.front());
// print("Back of queue: " + q.back());

class Dancer {
  constructor(name, sex) {
    {
      this.name = name;
      this.sex = sex;
    }
  }
}

function getDancers(males, females) {
  const names = read('dancers.txt').split('\n')
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].trim()
  }
  for (let i = 0; i < names.length; i++) {
    const dancer = names[i].split(' ');
    const sex = dancer[0]
    const name = dancer[1]
    if (sex === 'F') {
      females.enqueue(new Dancer(name, sex))
    } else {
      males.enqueue(new Dancer(name, sex))
    }

  }
}

function dance(males, females) {
  print("The dance partners are: \n");
  let person;
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    print("Female dancer is: " + person.name);
    person = males.dequeue();
    print(" and the male dancer is: " + person.name);
  }
  print('');
}

function read(filename) {
  return fs.readFileSync(filename, 'utf-8');
}

var maleDancers = new Queue();
var femaleDancers = new Queue();

// getDancers(maleDancers, femaleDancers);
// dance(maleDancers, femaleDancers);
// if (maleDancers.count() > 0) {
//   print("There are " + maleDancers.count() +
//     " male dancers waiting to dance.");
// }
// if (femaleDancers.count() > 0) {
//   print("There are " + femaleDancers.count() +
//     " female dancers waiting to dance.");
// }

function distribute(nums, queues, n, digit) {
  for (let i = 0; i < n; i++) {
    if (digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i])
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
    }
  }
}

function collect(queues, nums) {
  let i = 0;
  for (let digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr) {
  for (var i = 0; i < arr.length; ++i) {
    print(arr[i] + " ");
  }
}

const queues = [];
for(let i=0;i<10;i++){
  queues[i] = new Queue();
}

const nums = [];
for(let i=0;i<10;i++){
  nums[i] = Math.floor(Math.floor(Math.random() * 101))
}

print("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
console.log(queues)
collect(queues, nums);
console.log('nums: ', nums)
distribute(nums, queues, 10, 10);
console.log(queues)
collect(queues, nums);
console.log('nums: ', nums)
print("\n\nAfter radix sort: ");
dispArray(nums);