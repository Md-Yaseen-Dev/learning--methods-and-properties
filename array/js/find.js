// find() method is used to check the condition of an array which is provided by a function. if the first index stasfies the conditions it will returns that value ,if not then it will check to index2 and so on ... to the last index. if no values stasfies the condition it returns undefined.


const arr = [1, 3, 4, 10, 34, 38];

console.log(arr.find(element => element > 10));


// parameters
// callbackfn , 

// elements, index ,  array, and thisArg etc


// --- find an object in array by an one of its properties.


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "pineapples", quantity: 0 },
    { name: "strawberries", quantity: 8 },

]

function ispineapple(fruit) {

    return fruit.name === 'pineapples'
}

console.log(inventory.find(ispineapple));

// ---- find a prime number in an array.

// the following example finds an element in the array that is a prime number or returns undefined if there is no prime number


function isprime(element, index, array) {

    let start = 2;


    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1
}

console.log([4, 6, 8, 12, 16, 35].find(isprime));
console.log([4, 6, 5, 11, 7, 35].find(isprime));


//  --- using find on sparse arrays

// empty slots in sparse arrays are visited, and are treated the same as undefined.

const arr1 = [2,3,4,5,,6,,9];

arr1.find((value,index) =>{

   console.log(`visited index :${index} with value : ${value}`)

})

arr1.find((value,index) => {

    if(index === 0){
        console.log("deleting array[5] with value", arr1[5])
    //  delete arr1[5]
    }

    console.log(`visited index :${index} with value : ${value}`)


})



//calling find on non array objects

// the find() methods reads the length property of this and then accessed each integer index.


const arraylike = {
    length : 3,
    0:2,
    1:4.5,
    3:6,
}
console.log(Array.prototype.find.call(arraylike, (x) => !Number.isInteger(x)))