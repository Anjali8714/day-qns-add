function filterarray(arr){
    a=[];
for(i=0;i<arr.length;i++){
    if(arr[i]){
        a.push(arr[i]);
         
    }
}
return a
}
console.log(filterarray([1, 2, "aasf", "1", "123", 12]));
