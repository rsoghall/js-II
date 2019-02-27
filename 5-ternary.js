// *** TERNARY *** //

// Let's review if/else statements
let name = 'Ryan';
if(name !='Ryan'){
    name ='Ryan'
} else {
    name = 'John'
}
console.log(name)


// What if we could write the same thing, but with less typing?
let x = name === 'John' ? true : false

console.log(x)
// How do we use an if/else statement to assign a variable?

// How do we do it with a ternary?

// Can we nest ternaries?
y = -1
let thing = y > 0 ? 'its positive' : y === 0 ? 'its zero' : 'its negative'
console.log(thing)