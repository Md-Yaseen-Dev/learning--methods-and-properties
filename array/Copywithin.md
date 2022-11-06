# Array.prototype.copywwith()

The copywithin() method is used to target the index and start the array values. and return it without modifying its length.

_example_

```javascript
const array = ["1", "2", "3", "4", "5"];

//copy index 3 element in index 1

console.log(array.copyWithin(1, 3)); 

//output:-["1","4","5","4", "5"]


//copy index 3 element and start the index 1 and counts number of third paremeter until the end.

console.log(array.copyWithin(1,3,5))

//output :- ["1","4","5","4","5"]   ---- // the output is true when the above console is commented

```

## To know more information click the link below:-

&#8594; [click-here](./js/copywithin.js)
