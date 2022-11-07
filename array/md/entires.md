# Array.prototype.entries()

The entires() method returns a new Array iterator object that contains the key/value pairs for each index in the array

*Example:-*

```javascript

const arr = ["red","blue", "black"];

const iterator1 = arr.entries();

console.log(iterator1);
// output :-  Array Iterator {}

console.log(iterator1.next())
// {value: Array(2) ,  done :false}

console.log(iterator1.next().value)

// output :- [0, red]

```

