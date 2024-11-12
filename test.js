const arr = [61, 85, 19, 88, 68, 8, 70, 29];
const arrB = [8,29,19,85,68,61,88,70]

function shellsort(arr) {
  const newArr = [...arr];
  const gaps = [5, 3, 1]
  console.log("Starting shell sort...");

  for (let g = 0; g < gaps.length; ++g) {
    console.log(`Using gap: ${gaps[g]}`);

    for (let i = gaps[g]; i < newArr.length; ++i) {
      const temp = newArr[i];
      console.log(`Considering element ${temp} at index ${i}`);

      let j;
      for (j = i; j >= gaps[g] && newArr[j - gaps[g]] > temp; j -= gaps[g]) {
        console.log(`Shifting element ${newArr[j - gaps[g]]} from index ${j - gaps[g]} to index ${j}`);
        newArr[j] = newArr[j - gaps[g]];
      }

      newArr[j] = temp;
      console.log(`Placed element ${temp} at index ${j}`);
      console.log(`Array state: ${newArr}`);
    }

    console.log(`Array after gap ${gaps[g]}: ${newArr}`);
  }

  console.log("Shell sort completed. Final sorted array:", newArr);
}

function bubbleSort(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      console.log(newArr[j] + ' > ' + newArr[j + 1])
      if (newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j + 1)
      }
    }
    console.log(newArr)
  }
  return newArr
}

function selectionSort(arr) {
  const newArr = [...arr];
  let min;
  for (let i = 0; i < newArr.length - 1; i++) {
    console.log('Before: ', newArr)
    min = i
    for (let j = i + 1; j < newArr.length; j++) {
      if (min > newArr[j]) {
        min = j
      }
    }
    swap(newArr, i, min)
    console.log('After: ', newArr)
  }
  return newArr
}

function insertionSort(arr) {
  const newArr = [...arr];
  let temp, j;
  for (let i = 1; i < newArr.length; i++) {
    temp = newArr[i]
    j = i;
    while (j > 0 && (newArr[j - 1] >= temp)) {
      console.log(newArr[j-1] + ' >= ' + temp)
      newArr[j] = newArr[j - 1]
      j--
    }
    newArr[j] = temp
    console.log(newArr)
  }
  return newArr
}

insertionSort(arr)

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2]
  arr[index2] = temp;
}


