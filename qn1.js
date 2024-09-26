
        let camelCase=function(s){
            let lower=s.toLowerCase();
            let x=lower.split(" ")
            let a=x[0];
            for(i=1;i<x.length;i++){
                t=x[i];
                a+=t.replace(t[0],t[0].toUpperCase());

            }
            return a
        }
        console.log(camelCase("my name is khan"));
       
        
        
    