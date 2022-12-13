function hasTargetSum(array, target) {
  // Write your algorithm here
    for(let i = 0; i < array.length; i++) {
    const x = target - array[i]
    for (let j = i+1; j < array.length; j++) {

        if(array[j] === x){
          return true
        }
      
    } 
  
  }
  return false  
  
}

/* 
  Write the Big O time complexity of your function here
   Complexity for the function is  "O(n)"
*/

/* 
  Add your pseudocode here
 looping through each number in the array
 x + array[i] === target: gettig value of x
 checking the rest of the numbers to find a match of x
 check if number matches x, if not continue looping through the array
 ending the loop and returning false if there is no match 
*/

/*
  Add written explanation of your solution here
  looping through each number in the array and check if the numbers find a match for value we are looking for "x"
  when the value of x matches the number we are looking for we stop looping through,else we loop through
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 6, 3], 5));
}

module.exports = hasTargetSum;