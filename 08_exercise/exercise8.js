const myNumberInput = document.getElementById("myNumberInput");
const resultArticle = document.getElementById("resultArticle");
/*
Write a function that reverses a number: given a number, reverse its digits. 

Examples: <br>
Input: 1234 <br>
Output: 4321 <br> <br>
Input: 100000000 <br>
Output: 1 <br> <br>
Input: -321 <br>
Output: -123

Estimated time: 15 minutes <br>
Total points: 15
*/


function reverse(){
    let n = parseInt(myNumberInput.value);
    let res = "";
    if(isNaN(n))
        alert("write a number please");
    else{
        let i = n<0 ? -n : n;
        while(i != 0){
            res += (i%10).toString();
            i = parseInt(i / 10);
        }

        res = parseInt(res);

        if(n<0)
            res = "-" + res;

        resultArticle.innerHTML = res;
    }
}