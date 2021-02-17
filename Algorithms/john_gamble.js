const findRound = (N, K) => {
  console.log("N : " + N + " K :" + K);
  let round = 0;
  var rounds = [];
  while (N > 1) {
    if (N > 2 && N % 2 == 0 && K > 0) {
      //all-in-bet
      rounds.push("all-in");

      N = N / 2;
      K--;
      round++;
    } else {
      //one-bet
      rounds.push("one");
      N = N - 1;
      round++;
    }
  }
  rounds.reverse().forEach((item, i) => {
    console.log(i + 1 + " : " + item);
  });

  return round;
};

console.log("Round number is : ", findRound(8, 0));
console.log("Round number is : ", findRound(18, 2));
console.log("Round number is : ", findRound(10, 10));
