const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }
  return table[target.length];
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
//[
//  ["purp", "le"],
//  ["p", "ur", "p", "le"],
//];
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
//[
//  ["ab", "cd", "ef"],
//  ["ab", "c", "def"],
//  ["abc", "def"],
//  ["abcd", "ef"],
//];
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
//[]
/* this trye to create huge array and stack exceed eror occured.
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); //0
*/

/*
Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of string

The functionshould return a 2D array containing 'all of the ways' that the 'target' can be 
constructed by concatenating elements of the 'word Bank' array. Each element of the 2D array should 
represent one combination that construct the 'target'.

You may reuse elements of 'wordBank' as many times as needed.

allConstruct(purple, [purp, p, ur, le, purpl]) 
-> [
[purp, le],
[p, ur, p, le]
]

allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c])
-> [
    [ab, cd, ef],
    [ab, c, def],
    [abc, def],
    [abcd, ef]
]

allConstruct(hello, [cat, dog, mouse]) ->[]
allConstruct('', [cat, dog, mouse]) ->[[]]


memoized complexity:

m : target.length
n : wordbank.length
time: ~O(n^m)
space: ~O(m)

*/
