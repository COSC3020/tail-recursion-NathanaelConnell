function fibonacciTailRecursive(n, a = 0, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    return fibonacciTailRecursive(n - 1, b, a + b);
}
module.exports = fibonacciTailRecursive;
