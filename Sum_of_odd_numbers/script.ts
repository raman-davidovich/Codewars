// -------------------------Codewars: Sum of odd numbers--------------------------------------------
// Given the triangle of consecutive odd numbers:
//            1
//         3     5
//      7     9    11
//   13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
// e.g.:(Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8
function rowSumOddNumbers(n:number): number {
  return n ** 3;
}
// eslint-disable-next-line no-console
console.log(rowSumOddNumbers(1));// 1
// eslint-disable-next-line no-console
console.log(rowSumOddNumbers(2));// 8
// eslint-disable-next-line no-console
console.log(rowSumOddNumbers(42));// 74088

function rowSumOddNumbers2(n:number): number {
  let sum: number = 0;
  let firstNumberInRow: number = n * (n - 1) + 1;
  for (let i = 1; i <= n; i += 1) {
    sum += firstNumberInRow;
    firstNumberInRow += 2;
  }
  return sum;
}
// eslint-disable-next-line no-console
console.log(rowSumOddNumbers2(1));// 1
// eslint-disable-next-line no-console
console.log(rowSumOddNumbers2(2));// 8
// eslint-disable-next-line no-console
console.log(rowSumOddNumbers2(42));// 74088
