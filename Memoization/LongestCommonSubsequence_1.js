const LCSLength = (x, y, m, n) => {
  if (m == 0 || n == 0) return 0;

  if (x[m - 1] == y[n - 1]) return LCSLength(x, y, m - 1, n - 1) + 1;

  return Math.max(LCSLength(x, y, m, n - 1), LCSLength(x, y, m - 1, n));
};

X = "ABCBDAB";
Y = "BDCABA";
console.log(LCSLength(X, Y, X.length, Y.length));

X = "BSCDCDCBABADS";
Y = "CBDABDCADABDASDC";
console.log(LCSLength(X, Y, X.length, Y.length));
