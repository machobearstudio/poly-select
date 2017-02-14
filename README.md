# poly-select
Picks given keys and associated values from an object or array

## Motivation
When working data transformation pipelines, it is often needed to be able
to filter out unused data leaving only a few pieces for downstream processing.

This tool is effectively a shorthand version of:
```
   filter((x, key) => selectedKeys.indexOf(key) >= 0)
```

## Features
- Works with objects and arrays
- Automatically curried

## Installation

```
npm install poly-select
```

## Testing
```
npm test
```

## Usage

```javascript
var select = require('poly-select');

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
```
