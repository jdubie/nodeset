set
---

Simple set for strings in javascript

examples
--------

```javascript
var Set = require('set')

// create set
var set = new Set();

// add elements to set
set.add('foo');
set.add('bar');

// get those elements
set.values();
//=> ['foo', 'bar']

// remove elements
set.remove('foo');
set.values();
//=> ['bar']
```
