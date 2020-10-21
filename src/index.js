module.exports = function reverse (n) {
  n = Math.abs(n);
  n = String(n);
  var newString = "";
  for (m = n.length - 1; m >= 0; m--) {
      newString += n[m];
  }
  return newString;
}