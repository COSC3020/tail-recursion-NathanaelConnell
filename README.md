# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

The non tail recursive fibonacci function has an exponential time complexity of big theta (2^n) due to the binary recursion tree where each call generates two further calls resulting in redundant computations. The tail recursive fibonacci function has a linear time complexity of big theta (n) becasue it only makes one recursive call per step, passing along intermediate results and avoids redundant calculations. While both versions have a space complexity of big theta(n) due to the recursion depth, the tail recursive version can achieve a space complexity of big theta(1) if tail call optimization is applies by the runtime as it can ve transformed into an iterative process. The tail recursive version is more efficient in terms of both time and space especially for larger values of n.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
