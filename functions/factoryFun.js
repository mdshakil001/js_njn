let mulPlayer = 1.2

function createTaxCalc(tax){
    console.log("Upper functions = ", mulPlayer)
    function calcTax(amount){
        console.log("inside functions = ", mulPlayer)
        return amount * tax * mulPlayer
    }
    return calcTax
 }



const calculateVatAmount = createTaxCalc(.15)
mulPlayer = 2.5

console.log(calculateVatAmount(200))
console.log(calculateVatAmount(400))
