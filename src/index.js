module.exports = function reverse (n) {
  n = String(Math.abs(n));
  n = n.split('').reverse().join('');
  return  +(n)
}
