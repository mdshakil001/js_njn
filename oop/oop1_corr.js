class User{
    constructor(name, email){
        this.username = name
        this.mail = email

        // console.log("la la la");

    }
}


const userOne = new User('jack', 'jack@mail.com')
const userTwo = new User('john', 'john@mail.com')
const userThree = new User('rock', 'rock@mail.com')

console.log(userOne);
console.log(userTwo);
console.log(userThree);
