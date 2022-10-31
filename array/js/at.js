// the at() method is used to return value of an index position.

const arr = [1,2,3,"yaseen",5]

const index = 2 ;
const index1 = -2;

console.log(`${arr.at(index)}`)// expected output : 3
console.log(`${arr.at(index1)}`)// expected output : yaseen
console.log(arr.at()) // By  Default it return first index position value. i,e arr[0] : 1
console.log(`${arr.at(6)}`) // if we do not find index number in the array then it will return undefined.


