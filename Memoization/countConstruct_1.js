const countConstruct = (target, wordBank) => {
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numberWaysForRest = countConstruct(
        target.slice(word.length),
        wordBank
      );
      totalCount += numberWaysForRest;
    }
  }
  return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true

console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
/*
Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of 
string.

The function should return the 'number of ways' that the 'target' can be constructed by concatenating
elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed.+

countConstruct(abdef, [ab, abc, cd, def, abcd]) -> 1
countConstruct(purple, [purp, p, ur, le, purpl]) -> 2

lets draw tree;

                                 abcdef
        cdef(abcdef-cdef)   def(abcdef-abc)    ef(abcdef-abcd)

          ef(cdef-cd)           ...

complexiity:
m : target.length
n : wordbank.length
time: O(n^m * m)
space: O(m^2)
*/
