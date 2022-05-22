/*
GetX
Write a function, getX, that given an int x and a integer array num, returns the Xth number if the list was in sorted order. In other words, the Xth smallest number.

Function Name: getX

Input: An integer, x, and an unsorted list of integers nums that aren’t necessarily distinct

Output: The integer corresponding to the Xth number in the sorted list

Example:

getX(2, [5, 10, -3, -3, 7, 9]) => -3
The second number in order is -3.

getX(4, [5, 10, -3 , -3, 7, 9]) => 7
The fourth number in order is 7.

Note that this assumes the first number is position 1, not 0.
*/

function getX(x, nums) {
    // Write your code here
    let swap = true;
    while(swap){
        swap = false;
        for(let i = 0; i<nums.length-1; i++){
            if(nums[i]>nums[i+1]){
                let temp = nums[i+1];
                nums[i+1] = nums[i];
                nums[i] = temp;
                swap = true;
            }
        }
    }   
    console.log(nums);
    return nums[x-1];
  }
  
  console.log(getX(4, [5, 10, -3, -3, 7, 9]));
  
  // Leave this so we can test your code:
  module.exports = getX;