//This is the initial test array (Input)
var A = [ 0, 0, -1, 0 ];

// Main function, and it returns the Max non-negative subarray only
function max (A){
  var max = {
    array: [],
    sum : 0
  };
  var sum = 0;
  var temp = [];


  for (var i = 0; i < A.length; i++) {

    if (A[i] >= 0) {
    for (var j = i; j < A.length; j++) {
      if (A[j] < 0) {
        if (max.sum < sum || max.sum == sum) {
          max.sum = sum;
          max.array = temp;
        }
        i = j ;
        break;
      }
      sum = A[j] + sum ;
      temp.push(A[j]);

      if (j == A.length-1 && max.sum < sum) {
        i = j ;
        max.sum = sum;
        max.array = temp;
      }
    }
    sum = 0;
    temp = [];
  }
}
  return max;
}

console.log(max(A));
