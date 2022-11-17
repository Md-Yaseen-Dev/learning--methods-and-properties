// The includes() method determines whether an array includes a certain value among its entries, returning true or false appropriate.

const array = [2, 3, 4];
console.log(array.includes(3));


const array2 = ["red", "black", "blue", "violet"];

console.log(array2.includes('blue', 2)); // it will search element from index.

// ---  fromIndex is greater than or equal to the array length

// it will return false. the array will be searched.

const arr = ['a', 'b', 'c'];

console.log(arr.includes('c', 3)) // it is greater than index. return false.


// computed index is less than 0 

// if fromindex is negative, the computed index is calculated to be used as a postion in the array at which to begin searching for searchElement. if the computed index is less than or equal to 0 

const arr1 = ['a', 'b', 'c'];

// console.log(arr1.includes('a', -100))// )true
// console.log(arr1.includes('b', -100))// )true
console.log(arr1.includes('c', -2))// )true  --- why
console.log(arr1.includes('a', -2))// )false


// --- sparse arrays, using includes()

// You can search for undefined in a sparse array and get true.

console.log([1, ,3].includes(undefined)); //true


// ---calling function on non array objects.

// The includes() method reads the length property of this and then accesses each integer index.


const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.includes.call(arrayLike, 2));
  // true

  console.log(Array.prototype.includes.call(arrayLike, 1)); //false