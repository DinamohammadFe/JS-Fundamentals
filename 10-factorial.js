function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const input = parseInt(process.argv[2], 10);
console.log(factorial(isNaN(input) ? 0 : input));
