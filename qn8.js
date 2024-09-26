function sortByLength(s){
   
    let t;
for(i=0;i<s.length;i++){
    
    
   for(j=i+1;j<s.length;j++){
    if(s[i].length>s[j].length){
        
        t=s[i];
        s[i]=s[j];
        s[j]=t;
    }
   }
  
}
console.log(s);


}
sortByLength(["apple", "pie", "shortcake"]);
  