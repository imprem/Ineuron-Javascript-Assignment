/*
 1. Write a Javascript function to check whether a triangle is equilateral,
 isosceles or scalene
 */

 const checkTringle = (a, b, c) => {

    if((a == b) && (b == c)){
        return "Equilateral Tringle!!";
    }else if((a == b) || (a == c) || (b == c)){
        return "Scalene Tringle!!"
    }else{
        return "Isosceles Tringle!!"
    }
 }

 const triangleType = checkTringle(2, 2, 3);
 console.log(`Tringle is ${triangleType}`); 