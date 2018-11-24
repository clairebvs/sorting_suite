function bubbleSort(arr) {
  do {
    var swap = false;
    arr.forEach((num, i) => {
      if (num > arr[i + 1]){
        var temp = num;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    });
  } while(swap === true)
  return arr;
}

module.exports = bubbleSort
