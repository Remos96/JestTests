//const functions = require('./sum')
const { sum, subtract, multiply, divide } = require("./sum")

test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
   expect(subtract(3, 2)).toBe(1);
});

test('multiplies 3 * 2 to equal 6', () => {
   expect(multiply(3, 2)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
   expect(divide(6, 2)).toBe(3);
});

