> # Array.prototype.find()

  The find() method returns the first element in the provided array that stasfies the testing function. if no values satisfy the testing value, undefined is returned.

  *Example:-*

  ```javascript
 
 const array = [3,2,43,23,52];

 const found = array.find(element => element >10);

 console.log(found);
 // output :- 43
  ```

  In other words we can define that find() method is used to check the condition of an array which is provided by a function. if the first index satisfies the conditions it will returns that value ,if not then it will check to index2 and so on ... to the last index. if no values stasfies the condition it returns undefined.

