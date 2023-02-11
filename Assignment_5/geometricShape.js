/*
Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.
*/

// Cylinder- Volume = πr2h 
class Cylinder{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI*this.radius**2*this.height);
    }
}

// 2)Sphere- Volume= 4/3πr3
class Sphere{
    constructor(radius){
        this.radius = radius;
    }

    getVolume() {
        return (4/3)*(Math.PI*this.radius**3)
    }
}

// Cone- Volume= πr2h/3
class Cone{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        return (Math.PI*this.radius**2)*(this.height/3);
    }
}

const cone = new Cone(12, 10);
console.log("Volume of cone : ", cone.getVolume().toFixed(4));

const sphere = new Sphere(12);
console.log("Volume of Sphere is : ", sphere.getVolume().toFixed(4));

const cyl = new Cylinder(12, 10);
console.log("Volume of Cylinder is : ", cyl.getVolume().toFixed(4));