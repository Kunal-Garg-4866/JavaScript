// Immediately Invoked Function EXPRESSION (IIFE)

(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
    
}());

( (name) => {
    
    console.log(`DB CONNECTED ${name}`);
} )("kunal");