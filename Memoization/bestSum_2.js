const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return memo[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); //[3,5]
console.log(bestSum(8, [1, 4, 5])); //[4,4]
console.log(bestSum(100, [1, 2, 5, 25])); //[25, 25, 25, 25];

/*
Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as 
arguments.

The function shoul return an array containing the shortest combination of numbers that add up to 
exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

bestSum(7, [5,3,4,7]) -> possible results [3,4] or [7] -> expected result : [7]
bestSum(8, [2,3,5]) -> possible results [2,3,3], [2,2,2,2], [3,5] -> expected result : [3,5]

lets draw tree;

bestSum(8, [2,3,5])

                                                                          8
                        6(8-2)                                          5(8-3)                        3(8-5)
     4(6-2)             3(6-3)          1(6-5)          3(5-2)          2(5-3)       0(5-5)       1(3-2)  0(3-3)
2(4-2)    1(4-3)    1(3-2)  0(3-3)                  1(3-2)  0(3-3)      0(2-2)
0(2-2)

memoized complexity:

m = target sum
n = numbers.length

time : O(n * m^2)
space : O(m^2)

canSum  -> "Can you do it? yes/no"
        -> Decision Problem
 
howSum  -> "How will you do it?"
        -> Combinatoric Problem

bestSum -> "What is the 'best' wat to do it?"
        -> Optimization Problem


*/
