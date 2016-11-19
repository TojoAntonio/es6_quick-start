import { sum, square, variable, MyClass } from './import';

// 25
console.log("square(5) = " + square(5));

var info = {
    name: 'Tojo Antonio',
    phoneNo: '+230 58 200 206'
}

var x = new MyClass(info);

//My name is Tojo Antonio
console.log("My name is " + x.getName());

//Myphone number is 59 200 206
console.log("My phone number is " + x.getPhoneNo());