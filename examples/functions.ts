function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(6, 6));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(1, 2));

addAndHandle(2, 3, printResult);
