function filterarray(arr){
    a=[];
for(i=0;i<arr.length;i++){
    if(typeof arr[i] === 'number'){
        a.push(arr[i]);
         
    }
}
return a
}
console.log(filterarray([1, 2, "aasf", "1", "123", 12]));


// function filterarray(arr){
//     return arr.filter(item => typeof (item) ==='numner');
// }
// console.log(filterarray([1, 2, "aasf", "1", "123", 12]));