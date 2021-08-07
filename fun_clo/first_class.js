let stuff = function(){}

function a(fn){
    fn()
}

a(function(){
    console.log("this is an function as a argument !");
})


function b(){
    return function c(){
        console.log("c in b");
    }
}

let aa = b()
aa()

