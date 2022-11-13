// findMap() method returns a new array formed by applying callback function to each element of the array. and flattening the result in one level.

const arr = [1, 2, [23, 4], [4, 5], 42, []];

console.log(arr.flatMap(num => num)) //output :- [1,2,23,4,4,5,42]


const arr1 = [1, 2, [2, 5, 6, [10, 22, []]]];

console.log(arr1.flatMap(a => a)) // for sub arrays it will concatenate 2 arrays only . and then it will concantenate other 2 sub arrays .


// ------- Pre-allocate and explicitly iterate

const arr2 = [2, 4, 6, 7,];

arr2.flatMap((x) => [x, x * 2]);


const n = arr2.length;

const acc = new Array(n * 2);

for (let i = 0; i < n; i++) {

    const x = arr2[i];

    acc[i * 2] = x;
    acc[i * 2 + 1] = x * 2;
}


console.log(acc);

//  --- differnce between map and flatmap

const array = [3, 6, 9, 12];

console.log(array.map((x) => [x * 2])); // returns in ub array

console.log(array.flatMap((x) => [x * 2]));// returns in one way.


const arr1a = ["it's Sunny in", "", "California"];

console.log(arr1a.map((x) => x.split(" ")));
// [["it's","Sunny","in"],[""],["California"]]

console.log(arr1a.flatMap((x) => x.split(" ")));
// ["it's","Sunny","in", "", "California"]

console.log(arr1a);

//  ------ using flatmap() on sparse arrays

console.log([2, 3, 4, 5, , , 9].flatMap(x => [x * 3]));


// ------ calling flatMap() on non array objects


// this reads the length property of this ad then access the integer index.


const arraylike = {

    length : 2,

    0: 1,
    1: 2,
}
console.log(Array.prototype.flatMap.call(arraylike, (x) => [x, x * 2]));
