var select = require('./index');

var object = {
  a: 100,
  b: 200,
  c: 'blah, blah'
};

var array = [
  100,
  200,
  'blah, blah'
];

// Complete application
console.log(select(['a', 'c'], object)); // => { a: 100, c: 'blah, blah' }
console.log(select([0, 2], array)); // => [100, 'blah, blah']

// Partial application
var selectB = select('b');
console.log(selectB(object)); // => { b: 200 }

var select1 = select(1);
console.log(select1(array)); // => [200]
