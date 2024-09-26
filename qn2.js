        let capitalise=function(s){
            x="";
            a=s.split(" ");
            for(i=0;i<a.length;i++){
                t=a[i];
                x+=t.replace(t[0],t[0].toUpperCase())+" ";
                
                
            }
            
           console.log(x);
           
        }
        capitalise("my name is khan");
        
    