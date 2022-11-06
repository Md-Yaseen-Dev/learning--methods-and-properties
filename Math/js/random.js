//  math.random() function return a floating-point, pseudo- random number that greater than or equal to o and less than 1.

//  it cananot be chosen or reset by the user.


var a = 20;
var b = 10;

console.log(Math.random(a));



//another  example

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const random = getRandomArbitrary(5,10)
console.log(random) // output :-  random output between 5 to 10 i.e min to max values.