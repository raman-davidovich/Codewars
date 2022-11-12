// -------------------------Codewars: Calculating with functions------------------------------------
// This time we want to write calculations using functions and get the results.
// Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times,
// dividedBy. Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right
// operand Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function executeValue(value: number, callback?: Function): number {
  return typeof callback === 'function' ? callback(value) : value;
}
function zero(callback?: Function): number {
  const value: number = 0;
  return executeValue(value, callback);
}
function one(callback?: Function): number {
  const value: number = 1;
  return executeValue(value, callback);
}
function two(callback?: Function) {
  const value: number = 2;
  return executeValue(value, callback);
}
function three(callback?: Function) {
  const value: number = 3;
  return executeValue(value, callback);
}
function four(callback?: Function) {
  const value: number = 4;
  return executeValue(value, callback);
}
function five(callback?: Function) {
  const value: number = 5;
  return executeValue(value, callback);
}
function six(callback?: Function) {
  const value: number = 6;
  return executeValue(value, callback);
}
function seven(callback?: Function) {
  const value: number = 7;
  return executeValue(value, callback);
}
function eight(callback?: Function) {
  const value: number = 8;
  return executeValue(value, callback);
}
function nine(callback?: Function) {
  const value: number = 9;
  return executeValue(value, callback);
}
// eslint-disable-next-line no-unused-vars
function plus(a: number): (b: number) => number {
  return (b) => a + b;
}
// eslint-disable-next-line no-unused-vars
function minus(a: number): (b: number) => number {
  return (b) => b - a;
}
// eslint-disable-next-line no-unused-vars
function times(a: number): (b: number) => number {
  return (b) => a * b;
}
// eslint-disable-next-line no-unused-vars
function dividedBy(a: number): (b: number) => number {
  return (b) => Math.floor(b / a);
}

// eslint-disable-next-line no-console
console.log(one(plus(zero())));// 1);
// eslint-disable-next-line no-console
console.log(seven(times(five())));// 35);
// eslint-disable-next-line no-console
console.log(four(plus(nine())));// 13);
// eslint-disable-next-line no-console
console.log(eight(minus(three())));//  5);
// eslint-disable-next-line no-console
console.log(six(dividedBy(two())));//  3);

function zero2(fn?: Function) { return fn ? fn(0) : 0; }
function one2(fn?: Function) { return fn ? fn(1) : 1; }
function two2(fn?: Function) { return fn ? fn(2) : 2; }
function three2(fn?: Function) { return fn ? fn(3) : 3; }
function four2(fn?: Function) { return fn ? fn(4) : 4; }
function five2(fn?: Function) { return fn ? fn(5) : 5; }
function six2(fn?: Function) { return fn ? fn(6) : 6; }
function seven2(fn?: Function) { return fn ? fn(7) : 7; }
function eight2(fn?: Function) { return fn ? fn(8) : 8; }
function nine2(fn?: Function) { return fn ? fn(9) : 9; }

function plus2(n: number) { return (v: number) => v + n; }
function minus2(n: number) { return (v: number) => v - n; }
function times2(n: number) { return (v: number) => v * n; }
function dividedBy2(n: number) { return (v: number) => Math.floor(v / n); }

// eslint-disable-next-line no-console
console.log(one2(plus2(zero2())));// 1);
// eslint-disable-next-line no-console
console.log(seven2(times2(five2())));// 35);
// eslint-disable-next-line no-console
console.log(four2(plus2(nine2())));// 13);
// eslint-disable-next-line no-console
console.log(eight2(minus2(three2())));//  5);
// eslint-disable-next-line no-console
console.log(six2(dividedBy2(two2())));//  3);
