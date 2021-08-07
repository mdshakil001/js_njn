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

function Admin(username, email, title){
    User.call(this, username, email)
    this.title = title

}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.run = function(){
    console.log("running !");
}

const userOne = new User('john', 'john@mail.com')
const userTwo = new User('jack', 'jack@mail.com')
const userThree = new Admin('dave', 'dave@mail.com', 'the green mile')

console.log(userOne, userTwo, userThree);
userOne.login().logout()

userThree.login()
userThree.run()