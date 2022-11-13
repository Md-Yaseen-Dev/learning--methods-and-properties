// flat() methods  creates a new array with all sub arrays concantenation to it.

const arr = [1, 2, 3, [4, 5,]];

console.log(arr.flat());



// ----flattening nested arrays

const arr1 = [1, [2, 3, [4, 5, 6, [7, 6, 8, [9, 10, [112, 1]]]]]];

const arr2 = [1, [2, 3, [4, 5, 6,]]];


console.log(arr2);// returns as it is how array looks

console.log(arr1); // it will return as it is  like a array if the sub arrays are more than 3 it will return a word array keyword.

console.log(arr1.flat()); // here it will concat only two arrays if they are more than two it concatenate in sub parts . if there are more three it will return  with a array keyword .


console.log(arr1.flat(Infinity)); // return with all sub arrays elements concatenation.



// ----- using flat() on sparse arrays

// the flat() methods removes empty slots in arrays


const arr3 = [1, 2, , , 4, 5];

console.log(arr3.flat()); // it will return with all concatenation,if there are only two sub arrays.

const arr4 = [1, 2, 3, [4, 5, [6, 10, [11, ,]],]];

console.log(arr4.flat()); // more than two it will return empty item in sparse.

console.log(arr4.flat(3)); // writing the  sub array index number ,we can concatenate empty item.

// --------- calling flat() on non array Object

// The flat() method reads the length property of this and then accesses each integer index. ig the element is not an array. its directly appended to the result. if the element is an array. it's flattended according to the depth.


const arrayllke = {

    length: 3,

    0: [1, 2],
    1: { length: 2, 0: 5, 1: 10 },
    2: 3,

}

console.log(Array.prototype.flat.call(arrayllke)); 
