// *** FOR LOOPS *** ///

// What is a for loop? What syntax does it use?

// How many different ways can we loop?

// Can we go backwards?

// How can we use a for loop with an array?

// Can we go backwards through an array?
let array = [5,10,15,20,25,30,35,41]
    for (i=array.length -1; i>=0; i--){
        console.log(array[i])
        console.log(i)
    }
     
let nums = [1,2,3,4,5,6,7];
for(i=0;i<nums.length;i++){
    nums[i] = nums[i] * 2;
    console.log(nums[i])
}

// for(i=array.length -1: i>=0: i--)
// for(i=array.length -1; i>=0; i--)

// for(i=array.length -1; i>=0; i--)