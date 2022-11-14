// The forEach() methods executes a provided function once for each array element.


const arr = [1, 2, 3];

const result = arr.forEach(a => console.log(a));

// console.log(result);

// here a is a element in a function that console with elements and get each value.

// normal forEach


const arr2 = [10, 50, 60,];

const result1 = arr2.forEach(myfunc);


function myfunc(b) {

    console.log(b)
}

// console.log(result1);

// here it work same as above.


// ---- aysnc function as forEach function

const ratings = [5, 4, 5];

let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (ratings) => {
    sum = await sumFunction(sum, ratings);
});

console.log(sum);


//  using forEach() on sparse arrays

const arraySparse = [1, 3, /*empty*/, 7];

let numcallback = 0;

arraySparse.forEach((element) => {
    console.log({ element });
    numcallback++;
});

console.log(numcallback);

// converting a for loop to forEach

const items = ["peanuts", "cahsew", "badam", "pistachio"];

const copyitems = [];

console.log(copyitems);

// before
for (let i = 0; i < items.length; i++) {
    copyitems.push(items[i])
}
console.log(copyitems);
// after 

items.forEach((items) => {
    copyitems.push(items);
});
// console.log(copyitems);



// ------printing the contents of the array

const logArrayelements = (element1, index /*array*/) => {
    console.log(`a[${index}] = ${element1}`)
};


[2.3, 5, 8].forEach(logArrayelements);


//  ---- using the args

// the following example updates an objects properties from each entry in the array,

class counter {

    constructor() {
        this.sum = 0;
        this.count = 0;
    }

    add(array) {

        array.forEach(function countEntry(entry) {
            this.sum += entry;
            ++this.count;

        }, this);
    }
}

const obj = new counter();
obj.add([2, 3, 4]);

console.log(obj.count);
console.log(obj.sum); // it returns the sum of the array.


// -- modifying the array  during iteration


const words = ["one", "two", "three", "four"]

words.forEach((word) => {
    console.log(word);

    // modifying

    if (word === "two") {
        words.shift();
    }
});
console.log(words);

// ----- calling forEach() on non array objects

// the forEach() method reads the length property of this and then access each integer index

const arraylike = {
    length :3,
    0: 2,
    1: 4,
    2: 6,
};

Array.prototype.forEach.call(arraylike, (x) => console.log(x))

// console.log(arraylike);