
        function spinWords(s){
           return s.split(" ")
           .map(letters => letters.length >=5?letters.split("").reverse().join(""):letters)
           .join(" ");
            
            
        }
        console.log(spinWords( "This is rehtona test"));
        
    