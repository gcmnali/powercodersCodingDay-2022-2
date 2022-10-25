/*
Write a function called *weekNumbersToWords* when given an input array of numbers 1-7, 
it outputs an array of the weeksdays written out. You must use a switch, not if/else.

Example: <br>
Input: [1,4,6,3,2] <br>
Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

Estimated time: 30 minutes <br>
Total points: 30

*/

weekNumbersToWords([1,2,5,6,8]);

function weekNumbersToWords(daysList){
    let retArr = [];
    for (let i = 0; i < daysList.length; i++) {
        if(daysList[i]<1 || daysList[i]>7)
            continue;
        retArr.push(dayoftheWeek(i.toString()))
    }
    console.log(retArr);
}
function dayoftheWeek(dayNumber){
    switch (dayNumber) {
        case "1":
            return "Monday";
            break;
        case "2":
            return "Tuesday";
            break;
        case "3":
            return "Wednesday";
            break;
        case "4":
            return "Thursday";
            break;
        case "5":
            return "Friday";
            break;
        case "6":
            return "Saturday";
            break;
        case "7":
            return "Sunday";
            break;
        default:
            break;
    }
}