function powerOf(x, n) {
  // if(n==1){
  //     return x;
  // }
  // console.log(x,n);
  // return x*powerOf(x,n-1);
  return n == 1 ? x : x * powerOf(x, n - 1);
}

function power(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(powerOf(2,5));
console.log(power(2, 5));
