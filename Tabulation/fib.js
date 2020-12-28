const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21
console.log(fib(50)); //12586269025

/*
Write a function 'fib(n)' that takes in a number as an argument.
The function should return the n-th number of the Fibonacci sequence

The 0th number of the sequence is 0.
The 1st number of the sequence is 1.

To generate the next number of the sequence, we sum the previous two.


n      : 0, 1, 2, 3, 4, 5, 6,  7,  8,  9,  ...
fib(n) : 0, 1, 1, 2, 3, 5, 8,  13, 21, 34, ...

lets draw table;

fib(6) -> 8

                            0   1   2   3   4   5   6 
                          -----------------------------------
                          |   | 1 | 1 | 2 | 3 | 5 | 8 |        -> length : 7

create zeroed array    :  | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
set known value fib(1) :  | 0 | 1 | 0 | 0 | 0 | 0 | 0 |

perform every iteration => array[n+1] += array[n]  and array[n+2] += array[n]  
this is very simple 

1st iteration  i = 0   :  | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
1st iteration  i = 1   :  | 0 | 1 | 1 | 1 | 0 | 0 | 0 |
1st iteration  i = 2   :  | 0 | 1 | 1 | 2 | 1 | 0 | 0 |
1st iteration  i = 3   :  | 0 | 1 | 1 | 2 | 3 | 2 | 0 |
1st iteration  i = 4   :  | 0 | 1 | 1 | 2 | 3 | 5 | 3 |
1st iteration  i = 5   :  | 0 | 1 | 1 | 2 | 3 | 5 | 8 |


and array[n] is the result.


complexity :

time  : O(n)
space : O(n)

*/
