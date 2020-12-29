const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//small number's fibonacci result not take much
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));

//but number is big,  this solution need very long time because exponantial time complexity
console.log(fib(50));

/*
we use recursive this implementation let's draw what is going on when calculating fib(7):

#1                                                  7
#2                              6                                             5
#3                  5                       4                      4                    3
#4          4             3           3           2          3           2        2           1
#5     3        2     2      1    2      1               2       1                                               
#6   2   1

here, we count how many times calculation every number:
7 : 1
6 : 1
5 : 2
4 : 3
3 : 5
2 : 8
1 : 5

if every number calculate only once. we don't calculate already known numbers thus calculation and 
times complexity is decrease dramatically. some tree branches don't execute.

we can achieve this with memoization
if we use memoization every number only once calculated

fib memoized complexity :
time : O(2^n)
space : O(n?)
*/
