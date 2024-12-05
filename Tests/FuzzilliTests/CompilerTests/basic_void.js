const test1 = void 1;
console.log(test1);
// Expected output: undefined

void console.log('expression evaluated');
// Expected output: "expression evaluated"

void (function iife() {
  console.log('iife is executed');
})();

iife();

// The test below will fail since the current FuzzIL support for void will be:
// function f14() {
//  console.log("test function executed");
// }
// void f14;
// then executing f14() will not return undefined

// void function test2() {
//   console.log('test function executed');
// };
// try {
//   test2();
// } catch (e) {
//   console.log('test function is not defined');
//   // Expected output: "test function is not defined"
// }