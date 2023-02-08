/*
Write a program to find whether a given number is special number or not
*/

function isNumberSpecial(x){

    let n = x;
    let num = 0;
    while(n > 0){
        let rem = n%10;
        let fact = 1;
        for(let i = 1; i <= rem; i++){
            fact *= i;
        }
        console.log("fact ", fact);
        num += fact;
        n = parseInt(n / 10);
    }

    if(x == num){
        console.log(`${x} is special number`);
    }else{
        console.log(`${x} is not a special number`);
    }
}

isNumberSpecial(145);