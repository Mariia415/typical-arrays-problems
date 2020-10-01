
exports.min = function min (array) {
    array.sort((a, b) => a -b);
    return array[0];
  }

exports.max = function max (array) {
  array.sort((a, b) => a - b);
    return array[array.length - 1];
}

exports.avg = function avg (array) {
  let sum = 0;
  let count = array.length;
  for(let i = 0; i < count; i++ ){
    sum += array[i];
  }
  return sum / count;
}
