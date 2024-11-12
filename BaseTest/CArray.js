export class CArray {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.gaps = [103, 97, 61, 37, 13, 7, 1];

    for (let i = 0; i < numElements; i++) {
      this.dataStore[i] = i;
    }
  }

  setData() {
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
  }

  clear() {
    for (let i = 0; i < this.dataStore.length; i++) {
      this.dataStore[i] = 0;
    }
  }

  insert(element) {
    this.dataStore[this.pos++] = element
  }

  toString() {
    let retstr = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 === 0) {
        retstr += "\n";
      }
    }
    return retstr
  }

  swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  bubbleSort() {
    const numElements = this.dataStore.length;
    for (let outer = numElements; outer >= 2; outer--) {
      for (let inner = 0; inner <= outer - 1; inner++) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          this.swap(this.dataStore, inner, inner + 1)
        }
      }
    }
  }

  selectionSort() {
    const numElements = this.dataStore.length;
    let min;
    for (let i = 0; i < numElements - 1; i++) {
      min = i;
      for (let j = i + 1; j < numElements; j++) {
        if (this.dataStore[j] < this.dataStore[min]) {
          min = j;
        }
      }
      this.swap(this.dataStore, i, min)
    }
  }

  insertionSort() {
    let j, temp;
    for (let i = 1; i < this.dataStore.length; i++) {
      temp = this.dataStore[i];
      j = i;
      while (j > 0 && (this.dataStore[j - 1] >= temp)) {
        this.dataStore[j] = this.dataStore[j - 1]
        j--;
      }
      this.dataStore[j] = temp
    }
  }

  shellsort() {
    for (let g = 0; g < this.gaps.length; ++g) {
      for (let i = this.gaps[g]; i < this.dataStore.length; ++i) {
        const temp = this.dataStore[i];
        let j;
        for (j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
      }
    }
  }

  shellsortD() {
    let N = this.dataStore.length;
    let h = 1;
    while (h < N / 3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (let i = h; i < N; i++) {
        for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
          this.swap(this.dataStore, j, j - h)
        }
      }
      h = (h - 1) / 3
    }
  }

  mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    console.log(`Merging subarrays from indices ${startLeft}-${stopLeft - 1} and ${startRight}-${stopRight - 1}`);

    let rightArr = new Array(stopRight - startRight + 1);
    let leftArr = new Array(stopLeft - startLeft + 1);
    let k = startRight;

    for (let i = 0; i < rightArr.length - 1; i++) {
      rightArr[i] = arr[k];
      k++;
    }

    k = startLeft;
    for (let i = 0; i < leftArr.length - 1; i++) {
      leftArr[i] = arr[k];
      k++;
    }

    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;

    console.log("Left array before merging:", leftArr);
    console.log("Right array before merging:", rightArr);

    let m = 0;
    let n = 0;

    for (let k = startLeft; k < stopRight; k++) {
      if (leftArr[m] <= rightArr[n]) {
        arr[k] = leftArr[m];
        m++;
      } else {
        arr[k] = rightArr[n];
        n++;
      }
      console.log(`Merged array at step (index ${k}):`, arr);
    }

    console.log("Merged array after merging:", arr.slice(startLeft, stopRight));
  }

  mergeSort() {
    if (this.dataStore.length < 2) {
      console.log("Array is already sorted.");
      return;
    }

    console.log("Starting merge sort on:", this.dataStore);
    let step = 1;
    let left, right;

    while (step < this.dataStore.length) {
      console.log(`Merge pass with step size: ${step}`);
      left = 0;
      right = step;

      while (right + step <= this.dataStore.length) {
        this.mergeArrays(this.dataStore, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }

      if (right < this.dataStore.length) {
        this.mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
      }

      console.log(`Array after merging with step size ${step}:`, this.dataStore);
      step *= 2;
    }

    console.log("Sorted array:", this.dataStore);
  }
}