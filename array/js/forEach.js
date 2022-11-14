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
    for (let i = 0; i <= items.length; i++) {
        copyitems.push(items[i])
    } 
console.log(copyitems);
// after 