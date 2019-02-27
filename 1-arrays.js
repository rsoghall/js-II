// *** ARRAYS *** //

// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';

let toDoList = [first, second, third]
console.log(toDoList[toDoList.length -1])
console.log(toDoList.length -1)
console.log(typeof toDoList.length)

// What is an array? What syntax does it use?
//****contains a list of items

// What can we keep in an array?
let everything = [1, true, [], {}, null, undefined, '', function(){}]

// How can we access the items in an array?
let nestedArray = [1,[2,[3]]]
console.log(nestedArray[1])

// How can we access the end of an array?

// METHODS //
// *** function inside of an object
let methodsExample = [1,2,3]
methodsExample.push(10)
console.log(methodsExample)
// push
//** adds the item to the end of the arry
// pop
//** removes last item of the array */
methodsExample.pop()
console.log(methodsExample)
// unshift
// ** adds item to front of the array
methodsExample.unshift(10)
console.log(methodsExample)

// shift
// ** removes item from front of array
methodsExample.shift()
console.log(methodsExample)

// slice
let partialArray = methodsExample.slice(0,1)
console.log(partialArray)

// splice
