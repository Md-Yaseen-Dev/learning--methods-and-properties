//  entries


// The entires method returns a new array iterator object hat contains the key/value pair for each index in the array.


const arr = ["a", "b", "c"];

const iter = arr.entries();

console.log(iter);  // return object array iterator {}.

console.log(iter.next()); // return ;- {value : [0, 'a'],  done:false }a

console.log(iter.next().value) // return [1, "b"]


// iterating with index and element

const a = ["pen", "pencil", "box"];

for( const[index,element]of a.entries()){

    console.log(index,element);
}

// using a for... of  loop

const array = ["a", "b", "c"];

const arrayEntries = array.entries();

for (const element of arrayEntries){
    console.log(element);
}

// iterating sparse arrays

// entires() will visit empty slots as if they are undefined

for(const element of [,"b"].entries()){
    console.log(element)
} // ouptut :-  first array value will be undefined
  // second index will be 1 : "b"


//   calling entries() on non- array objects

// the entries() methods reads the length property of this and then accesses each integer index.

const arraylike = {
    length :3,
    0:"bus",
    1:"train",
    2:"plane"
};

for(const entry of Array.prototype.entries.call(arraylike)){
    console.log(entry)
}