function highLow(str){
a=str.split(' ');
x=Math.max(...a);
y=Math.min(...a);
console.log(x+" "+y);
}
highLow("1 9 3 4 -5") ;

