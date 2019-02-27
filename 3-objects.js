// *** OBJECTS *** //

// How can we store related pieces of data?
var name = 'Beth';
var hair = 'blonde';
var email = 'beth@dm.com';
var password = '$ecret';


// Would an array work?
let user = {
    name: name,
    hair: hair,
    email: email,
    password: password
}
console.log(user.email)

let onObject ={
    first: true,
    second: null,
    third: undefined,
    fourth: 'string',
    fifth: 2,
    sixth: {name: 'Bob Ross', age: 100},
    seventh: [1,2,3],
    eighth: function(){return 5}
    
}
console.log(onObject.sixth.age)
onObject.tenth = 'Ryan'
console.log(onObject.tenth)
// What is an object? What syntax does it use?

// What can we keep in an object?

// How can we access the items in an object?

// How can we add more data to an object?



// METHODS // it is the pattern of putting a function on an object
let method = onObject.eighth()
console.log(method)

// What are functions that are stored in objects called? What syntax do they use?

// How do we write them?

// How do we invoke them?




// NESTED DATA //

// What if we have arrays and objects inside of each other???
//// Simple data types
//// Objects
//// Methods on objects
//// Using a for loop

let myData ={
    name: 'Bob Ross',
    favThings: ['Rain', 'Snow', 'Golf']
}
console.log(myData.favThings[1])

for(i=0; i<myData.favThings.length; i++){
console.log(myData.favThings[i])
myData.favThings[i] = 'food'
console.log(myData.favThings[i])
}