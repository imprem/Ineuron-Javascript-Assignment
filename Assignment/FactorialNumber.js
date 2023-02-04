// Write a program to find the factorial of a number.

const factorial = (num) => {
    let x = 1;
    for(let i = 1; i<=num; i++ ){
        x = x * i;
    }
    return x;
}

const num = prompt('Enter a number ');
const fact = factorial(num);
console.log(`factorial of ${num} is ${fact}`);