function fib(n, memo = []) {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  console.log(memo);
  console.log(result);
  return result;
}
