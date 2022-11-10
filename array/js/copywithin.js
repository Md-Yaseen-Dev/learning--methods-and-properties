// the copywithin() method doesn't copy deep of an array to another location in the same array and returns it without modifying the length.


//  In other words :- copywithin method is used to copy the arrays value from the  index value where address is located/intalized i.e index[0] or index[1] .and it will return the  arrays in the sequence manner to their lengths from first. to clear  watch the example below.

// note it will change in the original array too.


const a = ["apple", "ball","cat", "dog", "eagle" ,"fan"];

// console.log(a.copyWithin(3)) ;

console.log(a);

// here it copies first value to the the index[2] i.e apple is stored and it will continue from it.


// by using two parameters

// console.log(a.copyWithin(1,2)); // here first parameter is to target the index number. and second parameter is used to find the index  and passed the array value to the first parameter. and then it will continue the sequence to the end . and the rest of the array will place in their same places

// i.e 0 is an index and finds  index-2 of that array value(cat) is stored to 0 index. and continue till end. and rest of them in their places


console.log(a.copyWithin(1,2,6)) // first one it targets and second parameter is used to the start and third is used to end.

// in simpler above ex:-  2 index value(cat) is stored in index 1 and continue to index 3 (cat)


//  you will understand easily by this explianation i think so. 
// 1st is used to target the position and 2nd is used to take the index position i.e value is stored in 1st . third is used to end the index value position, if we do not found remaining indexes it will return as it is.