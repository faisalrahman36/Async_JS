console.log("Before Prepare food");

function prepareFood(data){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            // if data is not equal to 3 then Prepare Food otherwise Value not acceptable
            if(data !== 3){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }
            
        },10);
    });

    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is Ready");
        },20);
    });
    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },30);
    });
    return promise;
}
            // to get Value not acceptable write let promise=preparedFood(3)
let promise = prepareFood(2);
//console.log("Promise = ",promise);
promise.then(function (value){
    console.log("Food is Ready callback = ",value);
    return prepareFrenchToast();
})
.then(function (frenchToastValue){
    console.log("French Toast is Ready callback = ",frenchToastValue);
    return prepareCoffee();
})
.then(function (coffeeValue){
    console.log("Coffee is Ready callback = ",coffeeValue);
})
.catch(function (error){
    console.log("Error = ",error);
});



console.log("Value not acceptable case");
//reject case shouldn't proceed after Value not acceptable Error
let promise1 = prepareFood(3);
//console.log("Promise = ",promise);
promise1.then(function (value){
    console.log("Food is Ready callback for not acceptable case = ",value);
    return prepareFrenchToast();
})
.then(function (frenchToastValue){
    console.log("French Toast is Ready callback for not acceptable case = ",frenchToastValue);
    return prepareCoffee();
})
.then(function (coffeeValue){
    console.log("Coffee is Ready callback for not acceptable case = ",coffeeValue);
})
.catch(function (error){
    console.log("Error = ",error);
});

console.log("Did it run in sequence? No");



/*
prepareFood(function(value){
    console.log("Food is Ready callback = ",value);
    prepareFrenchToast(function (value){
        console.log("French Toast is Ready callback = ",value);
        prepareCoffee(function (value){
            console.log("Coffee is Ready callback = ",value);
        });
    });
});
*/
console.log("After Prepare food dinner is ready");