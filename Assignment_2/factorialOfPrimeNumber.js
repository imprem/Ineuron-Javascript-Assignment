/*
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
*/

function factorialOfPrimeNum(a, b){

    for(let num = a; num <= b; num++){

        let flag = false;
        for(let i = 2; i < num; i++){
            if( (num % i == 0)){
                flag = true;
                break;
            }
        }
        fact = 1;
        if(flag == false){
            for(let i=1; i<=num; i++){
                fact *= i;
            }
            console.log(`${num} is Prime Number and factorial of ${num} is ${fact}`);
        }
    }
}

factorialOfPrimeNum(2, 50);