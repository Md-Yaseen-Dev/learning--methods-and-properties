// The every method tests whether all elements in the array pass the test implemented by the provided function.It returns a Boolean value.


// in simpler the every method is used to test the array element with the function . if the condition is correct, it will return true otherwise false.

const arr = ["1", "2", "3", "4", "5"]

const fn = (values) => values < 10;

console.log(arr.every(fn));


// callback function

//  callback function contains three parameters they are

// element,index, array

// element :- the current element proceessed by the array

// index: - the index of the current element being processed in the array.

// array:- the array every was upon

function bigenough(element, index, array) {
    return element >= 10
}

const arr1 = ["20", "8", "70"];

const arr2 = ["12", "10", "15"]

console.log("this is " + arr1.every(bigenough)) // return false

console.log("this is " + arr2.every(bigenough)) // return true


// // check if one array is a subset of another array

const subset = (array1, array2) => array2.every((element) => array1.includes(element));

console.log("this subset is :-" + subset([2, 4, 5, 6, 7], [4, 5,]))
console.log("this subset is :-" + subset([2, 4, 5, 6, 7], [4, 5, 1]))


//  Intial array(modifying, appending,and deleteing)

// modifying element

let array = [2, 3, 4, 5];

array.every((element, index, array) => {
    arr[index + 1]--;

    console.log(`[${array}][${index}] -> ${element}`)

    return element < 5;

})

//  appending items

let arr_append= [2, 3, 4, 5];

arr_append.every((element, index, arr_append) => {
    arr_append.push(10);

    console.log(`[${arr_append} [${index}] -> ${element}`)

    return element < 5;

})

// delete

let arr_del= [2, 3, 4, 5];

arr_del.every((element, index, arr_del) => {
    arr_del.pop(4);

    console.log(`[${arr_del} [${index}] -> ${element}`)

    return element < 5;

})