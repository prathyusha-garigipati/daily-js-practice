//functions
const hello=()=>{
    console.log("hello world");
    return "hi";    
}
hello();
let v=hello();
console.log(v);

const sum=(p,q)=>{
    return p+q;
}
let y=sum(4,5);
console.log(y);

let a=1;
let b=2;
let c=3;
function onePlusAvg(a,b){
    return 1+(a+b)/2;
}
console.log(onePlusAvg(a,b));
console.log(onePlusAvg(b,c));
console.log(onePlusAvg(a,c));
