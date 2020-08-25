const addLargestNumbers = function(data) {

  data.sort(function(a,b) { return b-a;} )[1];
  console.log(data[0] + data[1]);
};

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));