const promise = new Promise(function(resolve, reject){
    resolve('hey!')
});

const cows = 9;

const countCows = new Promise(function(resolve, reject){
    if(cows>10){
        resolve(`we have ${cows} cows in the farm`)
    }else{
        reject("there are no cows in the farm")
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log('Finally'));