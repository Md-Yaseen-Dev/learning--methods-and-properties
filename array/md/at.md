# Array.prototype.at()

The at() methods takes an integer value and returns the item at that index .
and the index starts from 0 .

In negative index it checks from last integer value  and return the last item. and the index starts from -1.


 ` In otherwords, at() methods is used to return a value of an index position. and if we use negative number it will start counting from back of an array.`


**Note :-** If the element in the array doesn't find index ,then it returns <u>undefined.</u>



**<i>Example:-</i>**

```javascript

const arr = [1,2,3 ,"name"]

let index = 1 ;

let index1 = -1;

console.log(`${arr.at(index)}`) //  Expected output : 2 

console.log(`${arr.at(index1)}`)// Expected output : name

console.log(`${arr.at(5)}`) // expected output : undefined (because the index value is not found).

```


## To know more about click the link below :- 

* > `array.at() in js ` &#8594;[Click-Here](../js/at.js)







