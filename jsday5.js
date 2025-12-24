//basic for loop
for(let i=1;i<=5;i++){
    console.log(i);
}
//program to find the sum of first n natural numbers
let sum=0;
let n=prompt("Enter a number:");
n=Number.parseInt(n);
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log("The sum of first "+ n + " natural numbers is: " + sum);
//program to factorial of a number
let fact=1;
let num=prompt("Enter a number to find factorial:");
num=Number.parseInt(num);
for(let i=1;i<=num;i++){
    fact*=i;
}
console.log("The factorial of "+ num + " is: " + fact);
//for in loop
let obj={
    harry:90,
    rohan:80,
    aakash:85
}
for(let a in obj){
    console.log("The marks of " + a + " are " + obj[a]);
}
//for of loop
for(let b of "Harry"){
    console.log(b);
}