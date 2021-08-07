function User(username, email){
    this.username =  username
    this.email = email

   
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this
}


const userOne = new User('john', 'john@mail.com')
const userTwo = new User('jack', 'jack@mail.com')

console.log(userOne, userTwo);
userOne.login().logout()