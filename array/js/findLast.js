//  in findlast() methods iterates array in reverse order. it will start satisfy from last. if the value passed the test it will return that value .if no elements satisfy the testing function, undefined is returned.


const arr = [2, 35, 56, 34, 12, 2, 4];

const result = arr.findLast((element) => element > 10);

console.log(result);

// const r = arr.findLast((element) => element > 20);

// console.log(r);

