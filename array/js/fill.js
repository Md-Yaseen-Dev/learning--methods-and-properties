//  fill method changes all elements in array to the static value.


const array = [2, 3, 4, 5, 7];

console.log("before: " + array); 
console.log(array.fill(1, 2, 3));

console.log("after :- " + array); // it will change in exisiting array.
// fill methods contains 3 parameters and little bit of different from copywithin.

//  1st parmeter is used the value to fill the array.

// 2nd parameter is used to start with index . and given by the 1st parameter.

// 3rd parameter is used to end with the arr.length. simple it counts from 1.


//  if  we write 1 parameter


const arr1 = [10, 20, 30, 40, 50]

console.log(arr1.fill(1));
// it will fill all the element by 1 
// output : -[1,1,1,1,1]

// two parameters


// ---- using fill() to create a matrix of all 1

// This example shows how to create a matrix of all 1, like the ones functions of octave of matlab.

const arr = new Array(2);

for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(4).fill(1);
}
arr[0][0] = 10;
console.log(arr[0][0]); //10;
console.log(arr[0][1]); //1;
console.log(arr[0][2]); //1;

// it will return 1 because fill we accesed a 1 integer. when we attempt to give arr property value then only it change the value as we see 10.


// --- using fill()  to populate an empty array

//  this example shows how to populate an array, setting all elements to a specific value. The end parameter does not have to be specified.

const temp = Array(4).fill("temporary", 0);
console.log(temp); // it starts from 0 index and ends with last element.

const temp1 = Array(4).fill("temp", 3);
console.log(temp1); // it will returns three empty items .at last third index it returns temp value;


// ---- calling fill() on non array objects

//  the fill() method reads the length property of this and sets the value of each integer property from start to end.

const arraylike = { length: 3 };

console.log(Array.prototype.fill.call(arraylike, 1));

// ouptut: 0:1 ,1:1 2: 1 , length :3 .  // this will fill in values. of their property.