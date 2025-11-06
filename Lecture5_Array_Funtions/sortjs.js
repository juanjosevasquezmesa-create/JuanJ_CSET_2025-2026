// Sorts the 'num' array in ascending order (smallest to largest)
num.sort((a, b) => a - b);
// The compare function subtracts b from a:
// - If result < 0 (ie b is greater than a), a comes before b
// - If result > 0 (ie b is less than a), b comes before a
// - If result === 0 (ie they are equal), order stays the same
// Example: [0, 1, 2, 3, 10, 20, 30]

// Sorts the 'num' array in descending order (largest to smallest)
num.sort((a, b) => b - a);
// The compare function subtracts a from b:
// - If result < 0, b comes before a (so a is larger)
// - If result > 0, a comes before b (so b is larger)
// - If result === 0, order stays the same
// Example: [30, 20, 10, 3, 2, 1, 0]