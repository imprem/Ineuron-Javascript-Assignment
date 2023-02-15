/*
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.

*/

function computeDash(n){
 
    let num = "";
    console.log(num.length)
    while(n > 0){
        let r = n%10;
        if(r%2==0 && num.length != 0){
            num += "-"+r;
        }else{
            num += r;
        }
        n = parseInt(n/10);
    }

    console.log(num);
}

computeDash(25468);