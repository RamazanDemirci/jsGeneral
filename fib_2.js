const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

//small number's fibonacci result not take much
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));

//but number is big,  this solution need very long time because exponantial time complexity
console.log(fib(50));

/*
                 6
           5           4
      4        3
  3      2
2   1
and we use memoization in this implementation. 
You will see how much the calculation time will be reduced when you run this.

fib memoized complexity :
O(n) time
O(n) space
*/
