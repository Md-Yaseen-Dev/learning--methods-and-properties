// the findlastIndex() methods iterates the array in the reverse order and return the index of the first element that stasfies the provided testing function. if no element stasify the testing function, -1 is returned.

const arr = [1, 210, 20, 30, 10, 23, 4, 7];

const res = (element) => element > 10;

// console.log(arr.findLastIndex(res));


// ---- prime number in an array.

// The following examples returns the index of the last element in the array that is a prime number,or -1 if there is no prime number.

function isprime(element) {

    if (element % 2 === 0 || element < 2) {
        return false;
    }

    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
        if (element % factor === 0) {

            return false;
        }
    }
    return true;
}

console.log([4, 3, 27, 5, 7, 11].findLastIndex(isprime));
console.log([4, 30, 2, 15, 70, 10].findLastIndex(isprime));


// --- using findlastindex() on sparse arrays

// you can search for undefined in a sparse array and get the index of an empty slot.

console.log([1., , , , 3].findLastIndex((x) => x === undefined))


// ----- calling findLastIndex() on non array objects

//  The findLastIndex() methods reads the length property of this and then accesses each interger index.
const arraylike = {
    length: 4,
    0: 2,
    1: 7.53,
    2: 4,
    3: 5,


}
console.log(
    Array.prototype.findLastIndex.call(arraylike, (x) => Number.isInteger(x)));