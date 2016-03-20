// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var countOuter = 0;
var countInner = 0;
var countSwap = 0;

function resetCounters() {
  countOuter = 0;
  countInner = 0;
  countSwap = 0;
}

// top-down implementation
function mergeSortTopDown(array) {
  countOuter++;
  if(array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return concatInOrder(mergeSortTopDown(left), mergeSortTopDown(right));
}

function concatInOrder(left, right) {
  var array = [];

  while(left.length && right.length) {
    countInner++;
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

mergeSortTopDown(arrayRandom.slice()); // => outer: 19 inner: 24 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

mergeSortTopDown(arrayOrdered.slice()); // => outer: 19 inner: 15 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

mergeSortTopDown(arrayReversed.slice()); // => outer: 19 inner: 19 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();
