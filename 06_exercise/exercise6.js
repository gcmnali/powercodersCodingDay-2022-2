/*
Write a function called *getLastValue*. 
Pass an array of strings to the function, 
which sorts the strings alphabetically and returns the last element.

Example: <br>
Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
Output: Wednesday

Estimated time: 15 minutes <br>
Total points: 15 
 */

getLastValue(["Monday","Thursday","Saturday","Wednesday","Tuesday"]);
function getLastValue(arrOfStr){
    console.log(arrOfStr.sort()[arrOfStr.length-1]);
    console.log(arrOfStr.sort().slice(arrOfStr.length-1,arrOfStr.length)[0]);
}