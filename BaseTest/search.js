function seqSearch(arr, data) {
  for(let i=0;i<arr.length;i++){
    if(arr[i] === data){
      if(i > 0){
        swap(arr, i, i - 1)
      }
      return true
    }
  }
  return false
}

const arr = [4, 2, 6, 1]

for(let i=0;i<3;i++){
  seqSearch(arr, 1)
  console.log(arr)
}

function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp;
}

function findMin(arr){
  let min = arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }
  return { arr , min}
}
