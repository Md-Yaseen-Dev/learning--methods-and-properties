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

// --- Filtering invalid entries from json.

// The following example uses filter() to create a filtered json of all elments with non-zero , numeric id.


const arr = [
    { id: 15 },
    { id: 1 },
    { id: 0 },
    { id: 3 },
    { id: 5 },
    { id: 12 },
    {},
    { id: null },
    { id: NaN },
    { id: undefined },

];

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

const arrByIc = arr.filter(filterByID);

console.log('filtered array \n', arrByIc); // it return other than zero values such as 0, NaN, undefined, null etc.

console.log('Number of invalid Entries = ', invalidEntries) // it returns the number of invalid entries.


//  ----- searching in array

// following examples uses filter() to filter array content based on search criteria.

const fruits = ['apple', 'grapes', 'strawberry', 'mango', 'pineapple'];

// filter array search for criteria(query)

function filteritems(arr, query) {

    return arr.filter((el) => 

        el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filteritems(fruits,'ap'))
console.log(filteritems(fruits,'s'))


// ----- using filter() on sparse arrays

// filter will skip empty slots


console.log([1,, undefined].filter((x)=> x ===undefined));
console.log([1,, undefined].filter((x)=> x !== 2));


// --- calling filter() on non array objects

// the filter() methods reads the length property of this and then accesses each integer index.

const arraylike = {
    length : 3,

  0 :"a",
  1 :"b",
  2 :"c",

};
console.log(
    Array.prototype.filter.call(arraylike,(x)=> x <= "b")
)