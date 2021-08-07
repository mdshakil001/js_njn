const userOne = {
    username:'jack',
    emal:'jack@mail.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
}

console.log("email = ", userOne.emal, "  name = ",userOne.username);
userOne.login()


const userTwo = {
    username:'john',
    emal:'john@mail.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
}

console.log("email = ", userTwo.emal, "  name = ",userTwo.username);
userOne.login()


const userthree = new User('dani@mail.com', 'dani')