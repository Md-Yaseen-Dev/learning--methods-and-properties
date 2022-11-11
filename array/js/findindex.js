// The findIndex() methods return the index of the first element in an array that stasfies the provided functions. if no elements satisfy it will return -1.


const arr = [1, 24, 5, 4, 7, 10];

const largenum = (element) => element > 10;

console.log(arr.findIndex(largenum));//output 1


// --- find the index of a prime number in an array.

//  the following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.

function isprime(element) {
    if (element % 2 === 0 || element < 2) {

        return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {

        return false
    }
    return true
}

console.log([4, 9, 7, 8, 9, 10, 11].findIndex(isprime))

// ---  using findIndex() on sparse arrays.

// you can search for undefined in a sparse array and get the index of an empty set.

console.log([1,3,4,55,5,,,,3,34,46].findIndex((x => x === undefined)))// returns first undefined index value.


// ------calling findindex on non array objects.

// The findindex() methods reads the length property of this and then accesses each integer index.

const arraylike ={

    length:2,
    0:2,
    1:7.3,
    2:3
};

console.log(Array.prototype.findIndex.call(arraylike,(x) => !Number.isInteger(x)))