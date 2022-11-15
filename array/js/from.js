// Arrayfrom() methods create a new, shallow copied Array instance from an iterable or array like object.

const arr = "fosil";

console.log(Array.from(arr));

//  arraylike :- An iterable or array-like object to convert to an array.

//--------Array from a set

const set1 = new Set(['foo', 'bar', 'baz']);

console.log(Array.from(set1));


// ---------Array from a map

const map = new Map([[1, 2], [2, 4], [4, 6]]);

console.log(Array.from(map)); // return with all the array
console.log(Array.from(map.values())); // it returns value i.e right side elements such as 2, 4,

console.log(Array.from(map.keys())); // it returns 


//  Array from an Array-like object(arguments)

function f() {

    return Array.from(arguments);
}
console.log(f(1, 2, 3, 4, 5));


// ------ using arrow functions and array.from()


// using an arrow function as the map function to manipulate the elements

console.log(Array.from([2, 3, 4], x => x + x));




// calling from() on non array constructors

console.log(Array.from.call({}, { length: 1, 0: "foo" }));