const input=[
    {
        name:"john",
        age:13,
    },
    {
        name:"Rachel",
        age:45,
    },
    {
        name:"Jennifer",
        age:65,
    }
];
a=input.map(num => num.age);
b=Math.max(...a);
c=Math.min(...a);
d=b-c;
console.log(d);
