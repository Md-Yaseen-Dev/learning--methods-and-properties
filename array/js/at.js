// the at() method is used to return value of an index position.

const arr = [1,2,3,"yaseen",5]

const index = 2 ;
const index1 = -2;

console.log(`${arr.at(index)}`)// expected output : 3
console.log(`${arr.at(index1)}`)// expected output : yaseen
console.log(arr.at()) // By  Default it return first index position value. i,e arr[0] : 1
console.log(`${arr.at(6)}`) // if we do not find index number in the array then it will return undefined.


//         ------------ ----------------------     Return the last value of an array     ----------------------------------------------------

const fruits = ["apple", "mango", "grapes"];

function returnlast(arr1){
    return arr1.at(-1);
}

const item1 = returnlast(fruits)
console.log(item1)

fruits.pop(); //it removes the last element.

const item1a = returnlast(fruits)
console.log(item1a) // output last element is removed

console.log(fruits); // You can expect output : [apple, mango]

console.log(item1)//already the item1 last element is removed but it works  again because of function expression  


fruits.push("strawberry"); // adds an new element at last
const item2 = returnlast(fruits) // function called .
console.log(item2)// strawberry item is added to last.

console.log(fruits)//now u can see array is modifed/added at last element.



//      -------------------------------------           calling at() on non array objects       ---------------------------------------------------


//  The at() method reads the length property of this and calculates the index to access


const obj = {
    length :3, //here if u write 2 then it will work only for two index values i.e 0 : a , 1: b . You dont get 2:c until u make the length is equal to  properites // ;ength:3
    0 :"a",
    1 : "b",
    2 : "c",
}

// console.log(obj.at(1)) // typeerror

console.log(Array.prototype.at(obj,1)) // u get undefined because u should call the obj 

console.log(Array.prototype.at.call(obj,2)) // u get undefined because u should call the obj 
