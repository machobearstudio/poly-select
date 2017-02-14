var select = require('./index.js');

test('Selects keys and associated values from object', function () {
  var testData = {
    a: 100,
    b: 200,
    c: 'blah, blah',
    d: true,
    e: null
  }

  var result = { c: 'blah, blah', e: null };
  expect(select(['c', 'e'], testData)).toEqual(result);
  expect(select(['c', 'e'])(testData)).toEqual(result);

  var result = { a: 100, d: true, e: null };
  expect(select(['a', 'd', 'e'], testData)).toEqual(result);
  expect(select(['a', 'd', 'e'])(testData)).toEqual(result);

  var result = { e: null }
  expect(select(['e'], testData)).toEqual(result);
  expect(select(['e'])(testData)).toEqual(result);
});

test('Selects items from array based on their indexes', function () {
  var testData = [
    100,
    200,
    'blah, blah',
    true,
    null
  ]

  var result = ['blah, blah', null];
  expect(select([2, 4], testData)).toEqual(result);
  expect(select([2, 4])(testData)).toEqual(result);

  var result = [100, true, null];
  expect(select([0, 3, 4], testData)).toEqual(result);
  expect(select([0, 3, 4])(testData)).toEqual(result);

  var result = ['blah, blah']
  expect(select([2], testData)).toEqual(result);
  expect(select([2])(testData)).toEqual(result);
});
