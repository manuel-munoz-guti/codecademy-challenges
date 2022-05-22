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

  
  console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
  
  // Leave this so we can test your code:
  module.exports = statsFinder;