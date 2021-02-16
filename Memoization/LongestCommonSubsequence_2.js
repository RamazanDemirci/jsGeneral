const LCSLength = (x, y, m, n, memo = {}) => {
  if (m == 0 || n == 0) return 0;

  let key = m + "|" + n;

  if (key in memo) return memo[key];

  if (x[m - 1] == y[n - 1]) {
    memo[key] = LCSLength(x, y, m - 1, n - 1, memo) + 1;
  } else {
    memo[key] = Math.max(
      LCSLength(x, y, m, n - 1, memo),
      LCSLength(x, y, m - 1, n, memo)
    );
  }
  return memo[key];
};

X = "ABCBDAB";
Y = "BDCABA";
console.log(LCSLength(X, Y, X.length, Y.length));

X = "BSCDCDCBABADS";
Y = "CBDABDCADABDASDC";
console.log(LCSLength(X, Y, X.length, Y.length));
