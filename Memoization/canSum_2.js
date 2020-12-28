const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }

  memo[targetSum] = false;
  return memo[targetSum];
};

console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); //false

/*
Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as
arguments.

The function should return a boolean indicating whether or not it is possible to generate the 
targetSum using numbers from the array.

You may use an element of the array as many times as needed

You may assume that all inout numbers are nonnegative

canSum(7, [2, 4]) -> false because we cannot generate 7 from given array

canSum(7,[5,3,4,7]) -> true because; we ca generate 7 from this array 1> 3+4 , 2> 7

let's look at the tree:
                                            7

                2(7-5)         4(7-3)               3(7-4)       0(-7)   
                        
                        1(4-3)       0(4-4)         0(3-3)


memoized complexity:

m : targetSum
n = array length

time : O(m*n)
space : O(m)


*/
