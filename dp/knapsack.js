function max(a, b) {
  return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
  console.log(`knapsack(capacity=${capacity}, n=${n})`);

  // Base case
  if (n === 0 || capacity === 0) {
    console.log("Reached base case. Returning 0.");
    return 0;
  }

  // If the item size is greater than capacity, skip this item
  if (size[n - 1] > capacity) {
    console.log(`Item ${n} with size ${size[n - 1]} is too large for remaining capacity ${capacity}. Skipping item.`);
    return knapsack(capacity, size, value, n - 1);
  } else {
    // Calculate two cases: including the item and excluding it
    const includeItem = value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1);
    const excludeItem = knapsack(capacity, size, value, n - 1);
    console.log(`Comparing include (${includeItem}) vs exclude (${excludeItem}) for item ${n} with value ${value[n - 1]} and size ${size[n - 1]}`);

    // Return the maximum of including or excluding the current item
    const result = Math.max(includeItem, excludeItem);
    console.log(`Returning ${result} for knapsack(capacity=${capacity}, n=${n})`);
    return result;
  }
}

function dKnapsack(capacity, size, value, n) {
  console.log(`Starting Knapsack with capacity: ${capacity}, sizes: ${size}, values: ${value}, items: ${n}`);

  const k = [];
  for (let i = 0; i <= capacity; i++) {
    k[i] = [];
  }
  console.log('K ', k)
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        k[i][w] = 0;
      } else if (size[i - 1] <= w) {
        k[i][w] = Math.max(value[i - 1] + k[i - 1][w - size[i - 1]], k[i - 1][w]);
        console.log(`Including item ${i}: size=${size[i - 1]}, value=${value[i - 1]}. Max at [${i}][${w}] = ${k[i][w]}`);
      } else {
        k[i][w] = k[i - 1][w];
        console.log(`Excluding item ${i}: size=${size[i - 1]}. Max at [${i}][${w}] = ${k[i][w]}`);
      }
    }
    console.log(`Row ${i} after processing: ${k[i].join(', ')}`);
  }

  console.log("Final DP table:");
  for (let row of k) {
    console.log(row.join(', '));
  }

  console.log(`Maximum value that can be carried: ${k[n][capacity]}`);
  console.log('K ', k)
  return k[n][capacity];
}



var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 7;
var n = 2;
knapsack(capacity, size, value, n)
dKnapsack(capacity, size, value, n)