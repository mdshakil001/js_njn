// let person = {}

// person.name = 'jack'
// person.age = 30
// person.eat = function(){
//     console.log(`$}{name } id eating`);
// }
// person.sleep = function(){
//     console.log(`person is sleeping!`);
// } 



// const personMethod = {
//     eat = function(){
//         console.log(`person is eating`)
//         },

//     sleep = function(){
//         console.log(`person is sleeping!`)
//         } 
// }


//  function Person(name, age){

//     let person = {}

//     person.name = name
//     person.age = age

//     person.eat = personMethod.eat
//     person.sleep = personMethod.sleep

//     return person
// }



const captain = {
    name: 'mashrafi',
    age: 30,
    country: 'bangladesh'
}
const player = Object.create(captain)

console.log(player);   