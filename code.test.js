// code.test.js
const assert = require('assert');
const fibonacciTailRecursive = require('./code');

// Running the test cases
function runTests() {
    console.log('Running Fibonacci Tail-Recursive Tests...');

    // Test cases for Fibonacci
    assert.strictEqual(fibonacciTailRecursive(0), 0, "Fibonacci of 0 failed");
    assert.strictEqual(fibonacciTailRecursive(1), 1, "Fibonacci of 1 failed");
    assert.strictEqual(fibonacciTailRecursive(2), 1, "Fibonacci of 2 failed");
    assert.strictEqual(fibonacciTailRecursive(3), 2, "Fibonacci of 3 failed");
    assert.strictEqual(fibonacciTailRecursive(4), 3, "Fibonacci of 4 failed");
    assert.strictEqual(fibonacciTailRecursive(5), 5, "Fibonacci of 5 failed");
    assert.strictEqual(fibonacciTailRecursive(6), 8, "Fibonacci of 6 failed");
    assert.strictEqual(fibonacciTailRecursive(10), 55, "Fibonacci of 10 failed");
    assert.strictEqual(fibonacciTailRecursive(20), 6765, "Fibonacci of 20 failed");

    console.log('All tests passed!');
}

// Run the tests automatically when the script is executed
runTests();
