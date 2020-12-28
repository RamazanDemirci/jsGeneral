const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];
  let result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
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

lets draw tree;

allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c])

                                                abcdef

              cdef(abcdef-ab)               def(abcdef-abc)          ef(abcdef-abcd)

       ef(cdefcd)       def(cdef-c)          ..(def-def)               ..(ef-ef)

       ..(ef-ef)        ..(def-def)


*/
