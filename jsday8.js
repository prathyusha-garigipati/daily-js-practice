//problem 1
//write a program to print the marks of a student in an object using for loop
let marks = {
    harry: 90,
    rohan: 70,
    aakash: 80,
    shubham: 75
};
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//problem 2
//write a program to print the marks of a student in an object using for in loop
for(let key in marks){
    console.log("Marks of " + key + " are " + marks[key]);
}

//problem 3
//write a program to print "try again" until the user enters the correct number
let cn = 7;
let i;
while(i !== cn){
    console.log("Try again");
    i=parseInt(prompt("Enter a number"));
}
console.log("You have entered the correct number " + cn);

//problem 4
//write a program to find mean of 5 numbers
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}
console.log("Mean of 5 numbers is " + mean(10, 20, 30, 40, 50));