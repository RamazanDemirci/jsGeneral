const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

const sliceLeastSignificantDigits = (number, n = 0) => {
  return number.toString().split("").reverse().slice(0, n).reverse().join("");
};

console.log(sliceLeastSignificantDigits(fib(8), 6));
console.log(sliceLeastSignificantDigits(fib(36), 6));
