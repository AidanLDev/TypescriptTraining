type CombaineAble = number | string;
type Conversion = 'asNumber' | 'asString';

function combine(
  input1: CombaineAble,
  input2: CombaineAble,
  resultType: Conversion
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultType === 'asNumber'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ', ' + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'asNumber');

const combinedStringAges = combine('30', '26', 'asNumber');

const combinedNames = combine('Aidan', 'Max', 'asString');

console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);
