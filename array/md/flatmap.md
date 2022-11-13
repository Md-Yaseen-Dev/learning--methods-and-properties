> # Array.prototype.flatMap()

The flatMap() method returns a new array formed by applying a given callback function to each element of the array. and then flattening the result by one level. it is identical to a map() followed by a flat() of depth, but slightly more efficent than calling two methos separately.

**Example**

```javascript

const arr = [1,2,[23,4],[4,5],42,[]];

console.log(arr.flatMap(num => num)) //output :- [1,2,23,4,4,5,42]

```

## for more information click the link below :-


&#8594; [click-here](../js/flatMap.js)  &#8594; for flatMap.js
