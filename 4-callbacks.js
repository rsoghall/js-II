// *** CALLBACKS *** //

// What datatypes can we pass into a function?

// ** callback is a pattern or function passed into another function

function logger(callback, name){
console.log(callback(), name)
};
function hello(name){
  return 'Hello ' + name;
}
console.log(hello('Ryan'))
logger(hello, 'Ryan')


// What is a callback?

// Can we invoke a callback?

// Why on earth would we do this madness?

//// Dry code

//// Higher order functions that already exist

//// Asynchronous processes

//// Event listeners

function double(num){
  return num * 2
}
function tenTimes(num){
  return num * 10
}
let nums = [1,2,3,4,5];
function modify(callback, array){
  for(i=0; i<array.length; i++){
    array[i]=callback(array[i])
}
return array
}
console.log(modify(double,nums))
console.log(modify(tenTimes,nums))