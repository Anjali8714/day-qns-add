const arr=[30,2,-5,100,10];
let s=arr.sort((a,b) => a-b);
let x=Math.max(...s);
console.log(x);