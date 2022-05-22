/*
Calculate the Mean and Mode
Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. 
As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, 
return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].

Variations of this challenge were reported to have been asked at interviews with Amazon. If you’ve covered the material in Pass the 
Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge 
with its Algorithmic Complexity content.
*/


function statsFinder(array) {
    // Write your code here    
    const mean  = array.reduce((a,b) => { return  a + b })/ array.length;    
    
    let mode = 0;  
    let maxCount = 0;
    let diffValuesArr = [];
  
    for(let i=0; i<array.length; i++){        
      if(!diffValuesArr.includes(array[i])){
        let value = array[i];
        let currentCount = 0;
        for(let j=0; j<array.length; j++){
          if(array[j] === value ) currentCount ++;
        }
        if(currentCount > maxCount) {
            mode = value;  
            maxCount = currentCount;
        } 
        diffValuesArr.push(array[i]);
      }    
    }    
    return [mean, mode];    
  } 
  
  // Leave this so we can test your code:
  module.exports = statsFinder;