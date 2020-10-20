module.exports = function reverse (n) {
  n = n + "";
  return parseFloat(n.split('').reverse().join(''));
}
