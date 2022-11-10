// The filter() method creates a shallow copy of  a partion of a given array. filtered down to just the elemets from the given array that pass the test implemented by the  provided function.


const mobiles = ["samsung", "oneplus", "redmi", "vivo", "infinix"]

const result = mobiles.filter(mobiles => mobiles.length > 4);

console.log(result);


//  here it checks the function and and passes the test and return the values which is true.

console.log(mobiles);


// callback function -- syntax

// filter(callbackfn)
// filter(callbackfn , this Arg)


// ---- filtering out all small values

// The following examples uses filter() tp create a filtered array that has all elemets with values less than 10 removed.

function isBigEnough(value) {

    return value >= 10;

}

const filtered = [1, 23, 4, 233, 33, 44].filter(isBigEnough);

console.log(filtered);


// --- find all prime numbers in an array.

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function isprime(num) {

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            return false;

        }

    }
    return num > 1;
}

console.log(array.filter(isprime));