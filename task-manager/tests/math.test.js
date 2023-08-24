const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math');

test('Should calculate total with tip', () => {
    const total = calculateTip(10, 0.3);
    expect(total).toBe(13);
});

test('Should calculate total with default tip', () => {
    const total = calculateTip(10);
    expect(total).toBe(12.5);
});

test('Should convert 32 F to 0 C', () => {
    const c = fahrenheitToCelsius(32);
    expect(c).toBe(0);
});

test('Should convert 0 C to 32 F', () => {
    const f = celsiusToFahrenheit(0);
    expect(f).toBe(32);
});

// test('This should fail', () => {
//     throw new Error('Failure!');
// })