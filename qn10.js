function getSum(n){
    b=[];
    for(let a of n){
        b.push(Math.abs(a));  
    }
sum=b.reduce((acc,num) => acc+num)
x=Math.abs(sum);
console.log(x);

}
getSum([2, 4, 6, 8, 10])