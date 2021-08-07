function add(num1, num2){
    return num1+num2
}


console.log(add(1,2))
console.log(add(12,32))

function addRandom(nm1){
    return nm1+Math.random()
}

console.log(addRandom(2))

let prevRes = 0
function addMoreNm(nm1,nm2){
    const sum = nm1+nm2
    prevRes = sum
    return sum
}
console.log("prevRes = ", prevRes)
console.log(addMoreNm(4,5));
console.log("prevRes = ", prevRes)


const hobb = ['sports','cooking']
function printHobb(h){
    h.push('coding')
    console.log(h)
}
printHobb(hobb)