const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
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

canSum(7, [5,3,4]) -> true


                            0   1   2   3   4   5   6   7
                          -----------------------------------
                          | F | F | F | F | F | F | F | F |
                          
init                      | T | F | F | F | F | F | F | F |
1st iter.                 | T'| F | F | T | T | T | F | F |
2nd iter.                 | T | F'| F | T | T | T | F | F |
3rd iter.                 | T | F | F'| T | T | T | F | F |
4th iter.                 | T | F | F | T'| T | T | T | T |
5th iter.                 | T | F | F | T | T'| T | T | T |
6th iter.                 | T | F | F | T | T | T'| T | T |
6th iter.                 | T | F | F | T | T | T | T'| T |
6th iter.                 | T | F | F | T | T | T | T | T'|


complexity:

m = targetSum
n = numbers.length

time : O(mn)
space : O(m)

*/
