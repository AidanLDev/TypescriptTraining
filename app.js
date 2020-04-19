function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultType === 'asNumber') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ', ' + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'asNumber');
var combinedStringAges = combine('30', '26', 'asNumber');
var combinedNames = combine('Aidan', 'Max', 'asString');
console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);
