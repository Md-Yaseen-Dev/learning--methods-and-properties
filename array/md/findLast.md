> # Array.prototype.findLast()

The findLast() methods iterates tha array in reverse order and return the value of the first element that stasfies the provided testing function. if no element stasfies the testing function undefined is returned.

_Note_:- It is just opposite to find() method i.e reverse array, in the findLast it starts from end and if no elements found ,undefined is returned.

**Example:-**

```javascript
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// expected output: 130
```
## To know more information click the link below :-


&#8594; [click-here](../js/findLast.js)  &#8594; for findLast.js