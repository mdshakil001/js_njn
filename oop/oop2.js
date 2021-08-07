class User{
    constructor(name, email){
        this.username = name
        this.mail = email
        this.score = 0
    }


    login(){
        console.log(`${this.username} just logged in`);
        return this
        
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this
    }
    inScore(){
        this.score += 1
        console.log(`${this.username} has a score of ${this.score}`);
        return this
    }
}

const userOne = new User('User 1', 'jack@mal.com')
const userTwo = new User('User 2', 'john@mal.com')

console.log(userOne, userTwo);

// userOne.login().logout()
// userOne.inScore().inScore().inScore()

// console.log("===================================");
// userTwo.login().logout().inScore()