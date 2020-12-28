const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return memo[target];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

/*
Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of string

The function should return a boolean indicating whether or not the 'target' can be constructed by 
concatenating elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed.

canConstruct(abcdef, [ab, abc, cd, def, abcd]); -> abc + def -> true
canConstruct(skateboard, [bo, rd, ate, t, ska,sk,boar]) -> ska + t + ? ->  false
                                                        -> sk + ate + boar + ? ->  false
                                                        -> sk + ate + bo + ? -> false
canConstruct('', [cat, dog, mouse]) -> [] -> true

lets draw tree;

canConstruct(abcdef, [ab, abc, cd, def, abcd]) ->true
                                                       abcdef
                  cdef(abcdef-ab)                  def(abcdef-abc)           ef(abcdef-abcd)
        ef(cdef-cd)          c(cdef-def)            ..(def-def)


memoized complexiity:
m : target.length
n : wordbank.length
time: O(n * m^2)
space: O(m^2)     
*/
