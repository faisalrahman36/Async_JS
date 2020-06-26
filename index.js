console.log("Before food preparation");


function prepareFood() {
//arrow function within a function
    setTimeout(()=>{console.log("Prepare food");

},5000);
}

//function with callback . This 

function prepareFoodCB(callback) {

    setTimeout(()=>{console.log("Prepare food");
    callback("Food is Ready");

},20);

}

function mycallback(value) {

    console.log("Food callback = ",value);
}

function mycallbackFFT(value) {
//first PrepareFoodCB will execute and then PrepareFrenchToast
    console.log("Food callback = ",value);
    prepareFrenchToast(FrenchToastcallback);

}




function FrenchToastcallback(value) {

    console.log("Food callback = ",value);
}


function prepareFrenchToast(callback) {
    //arrow function within a function
        setTimeout(()=>{console.log("Prepare French toast");
        callback("French toast is ready.");
    },20);
    }
  
    
 prepareFoodCB(mycallbackFFT);   

//prepareFoodCB(mycallback);
//prepareFrenchToast(FrenchToastcallback);
/* Another method
prepareFoodCB((value) => {
    console.log("Value = ",value);}
    );

    */


//prepareFood();

console.log("After preparation of food.");