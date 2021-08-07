function giveAccessTo (name) {
    return 'Access Granted to ' + name
}

function authenticate(verify){
    let array = []
    for(let i=0; i<verify; i++){
        array.push(i)
    }
    return true
}

function letPerson(person, fn){
    if(person.level === 'admin'){
        fn(5000000)
    }else if (person.level === 'user'){
        fn(10000)
    }

    return giveAccessTo(person.name)
}

console.log(letPerson({level: 'user', name:'zara'}, authenticate))
console.log(letPerson({level: 'admin', name:'john'}, authenticate))