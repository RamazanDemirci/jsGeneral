const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
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

complexity:
m = target sum
n = numbers.length
time : O(n*m^2)
space : O(m^2)
*/
