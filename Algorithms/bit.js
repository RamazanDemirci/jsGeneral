const toDecimal = (bits = []) => {
  let res = 0;
  for (var i = 0; i < bits.length; i++) {
    if (i % 2 == 0) {
      res += Math.pow(2, i) * bits[i];
    } else {
      res -= Math.pow(2, i) * bits[i];
    }
  }
  return res;
};

//#1 : result array size less than current index, append and init with zero
//#2 : target number negatif and current index is even then sign is 1
//     target number pozitif and current index is odd then sign is -1
//     oterwise sign zero, that means don't anything iterate next index
//#3 : calculate current index value.
//#4 : sign the value cause aritmetic operator is static, thus we change the value
//#5 : calculate temporary target
//#6 : look if temporary target's the sign changed then calculate new target and temporary target.
//#7 : mark the index in result array
//#8 : repeat the process new target value.

const toBinary = (decimal) => {
  let res = [];
  let i = 0;
  var target = decimal;
  var tmp_target = target;

  while (Math.abs(target) != 0) {
    if (i > res.length) res.push(0); //#1

    //#2
    let sign = i % 2 == 0 ? 1 : -1;
    sign = target * sign > 0 ? sign : 0;

    if (sign != 0) {
      value = Math.pow(2, i); //#3
      value *= sign; //#4

      tmp_target = tmp_target - value; //#5
      if (sign * tmp_target <= 0) {
        target = target - value; //#6
        tmp_target = target;
        res[i] = 1; //#7
        i = -1; //#8
      }
    }

    i++;
  }

  return res;
};

const solution = (bits = []) => {
  number = toDecimal(bits);
  ceil = Math.ceil(number / 2);
  res = toBinary(ceil);
  console.log("number : " + number + " ceil : " + ceil + " res : " + res);
};

console.log(toDecimal([1, 0, 0, 1, 1, 1]));
N = -23;
console.log(N + " : " + toBinary(N));
N = -11;
console.log(N + " : " + toBinary(N));
N = -12;
console.log(N + " : " + toBinary(N));
N = 9;
console.log(N + " : " + toBinary(N));
N = 4;
console.log(N + " : " + toBinary(N));
N = 36;
console.log(N + " : " + toBinary(N));
N = -36;
console.log(N + " : " + toBinary(N));

N = -23;
solution(toBinary(N));
N = -11;
solution(toBinary(N));
N = -12;
solution(toBinary(N));
N = 9;
solution(toBinary(N));
N = 4;
solution(toBinary(N));
N = 36;
solution(toBinary(N));

/*
| 1 | -2 | 4 | -8 | 16 | -32 |
------------------------------
| 1 |  0 | 0 | 1  | 1  |  1  | ->  1 + 0 + 0 + (-8) + 16 + (-32) = -23
| 0 |  0 | 1 | 0  | 1  |  1  | ->  0 + 0 + 4 +   0  + 16 + (-32) = -12
| 1 |  0 | 0 | 1  | 1  |     | ->  1 + 0 + 0 + (-8) + 16         = 9
| 0 |  0 | 1 |    |    |     | ->  0 + 0                         = 4

Note that such a representation is suitable for both positive and negative integers.
Write a function:
    class Solution { public int[] solution(int[] A); }
that, given an array A of M bits, containing a sequence representing some integer X, returns the
shortest sequence of bits representing ceiling(X/2), where, ceiling(Y) is the smallest integer that is
bigger than or equal to Y.
For example, given A = (X = 9), the function should return (ceiling(X/2) = 5).
Given A = [1 , 1] (X = -23), the function should return (ceiling(X/2) = -11).
Given A = [] (X = O), the function should return [] (ceiling(X/2) = O).
Write an efficient algorithm for the following assumptions:
• M is an integer within the range [0..100,000];
• each element of array A is an integer that can have one of the following values: O, 1;
• if A is not empty then the last element of A is 1.

*/
