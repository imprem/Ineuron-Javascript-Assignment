/*
Write a javascript function find_largest to return the nth largest number
in an array-
*/

function find_largest(n){
    let arr = [12, 11, 8, 4, 15];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j< arr.length; j++){
            if(arr[i] > arr[j]){
                let tepm = arr[j];
                arr[j] = arr[i];
                arr[i] = tepm;
            }
        }
    }

    console.log(`The ${n} largest number is ${arr[n-1]}`);
}

find_largest(1);