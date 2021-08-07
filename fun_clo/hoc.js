function letAdamLogin(){
    let array = []
    for(let i=0; i<100000000; i++){
        array.push(i)
    }
    return 'Acces granted to adam !'
}

function letEvaLogin(){
    let array = []
    for(let i=0; i<100000; i++){
        array.push(i)
    }
    return 'Acces granted to eva !'
}

console.log(letAdamLogin());
console.log(letEvaLogin());