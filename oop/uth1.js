// class User{
//     constructor(usernmame, email){
//         this.usernmame = usernmame
//         this.email = email
//     }
// }

function User(username, email){
    this.username =  username
    this.email = email

    // this.login = function(){
    this.login = () => {
        console.log(`${this.username} has logged in`);
        return this
    }
    this.logout = function(){
        console.log(`${this.username} has logged out`);
    }
    console.log("constructor !");
}


const userOne = new User('john', 'john@mail.com')
const userTwo = new User('jack', 'jack@mail.com')

console.log(userOne.username, userTwo.username);
userOne.login().logout()