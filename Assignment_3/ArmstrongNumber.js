/*
Write a program to find whether a given number is armstrong number or not.
*/

function isArmstrong(n){

    let x = n;
    let y = n;
    let count = 0;
    while(x > 0){
        x = parseInt(x / 10);
        count++;
    }

    let num = 0;
    while(y > 0){
        let rem = y%10;
        let r = 1;
        for(let i = 1; i<= count; i++){
            r *= rem;
        } 

        num += r;
        y = parseInt(y / 10);
    }
    console.log(num);
    if(num == n){
        console.log(`${n} is a Aramstrong number`);
    }else{
        console.log(`${n} is not a Aramstrong number`);
    }
}

isArmstrong(9474);