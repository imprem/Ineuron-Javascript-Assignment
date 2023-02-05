/*
Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000
*/

const findSum = () => {

    let num = 0;
    let i = 1;
    
    while(num < 1000){
        num += i*3 + i*5;
        if(num < 1000){
            console.log(`Sum of multiple of 3 ${i*3} and 5 ${i*5} is ${num} `);
        }
        i++;
    }
}
 
findSum();