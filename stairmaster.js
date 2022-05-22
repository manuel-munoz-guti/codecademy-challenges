/*
Stairmaster
Write a function, stairmaster(n), that will compute the number of ways to climb a flight of n steps, taking 1, 2, or 3 steps at a time.

Take the example of climbing n = 4 steps. There are seven different ways one can climb four stairs using 1, 2, or 3 steps at 
a time: [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2] [1,3] [3,1].

Make sure to find all permutations, not combinations, as the order matters. Climbing one step then two steps is different from climbing two steps then one step.

*/
//O(n!) is less efficent
function stairmasterTwo(n) {
    if( n==1 || n==0){
        return 1;
    } else if(n==2) {
        return 2;
    } else {        
        return stairmaster(n-1) + stairmaster(n-2) + stairmaster(n-3);
    }
}

// O(n) more efficient algorithm
function stairmaster(n) {
    resultArr = new Array(n+1);
    resultArr[0] = 1;
    resultArr[1] = 1;
    resultArr[2] = 2;
    for(let i=3; i<=n; i++){
        resultArr[i] = resultArr[i-1] + resultArr[i-2] + resultArr[i-3];
    }
    return resultArr[n];
}

console.log(stairmaster(4));

// Leave this so we can test your code:
module.exports = stairmaster;
