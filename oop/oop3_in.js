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
    }
    inScore(){
        this.score += 1
        console.log(`${this.username} has a core of ${this.score}`);
        return this
    }
}

class Admin extends User{
    constructor(name, email, title){
        super(name, email)
        this.title = title
    }
    deleteUser(user){
        users = users.filter( function( e ) {
            return e.username !== user.username
            // console.log("username =====>>",e.username);
        })
    }
    titleName(){
        console.log(`name of the title is ${this.title}`);
    }
}


const userOne = new User('User 1','User_1@mail.com')
const userTwo = new User('User 2','User_2@mail.com')
const userFour = new User('User 4','User_4@mail.com')
const userThree = new Admin('User 3', "User_3@maiil.com", 'boronari')


let users = [userOne, userTwo, userThree, userFour]
// console.log(users)

// userThree.deleteUser(userTwo)
// console.log(users);

// userThree.title()
userThree.titleName()






































// class User{
//     constructor(name, email){
//         this.username = name
//         this.mail = email
//         this.score = 0
//     }


//     login(){
//         console.log(`${this.username} jut logged in`);
//         return this
        
//     }
//     logout(){
//         console.log(`${this.username} jut logged out`);
//     }
//     inScore(){
//         this.score += 1
//         console.log(`${this.username} has a core of ${this.score}`);
//         return this
//     }
// }

// class Admin extends User{
//     constructor(name, email, title){
//         super(name, email)
//         this.title = title
//     }
//     deleteUser(user){
//         userss = userss.filter((u) => {
//             return u.username !== user.username
//         })
//     }
// }

// const userOne = new User('jack', 'jack@mal.com')
// const userTwo = new User('john', 'john@mal.com')
// const userThree = new Admin('james', 'james@mail.com', 'trying_test')



// let userss = [userOne, userTwo, userThree]
// console.log(userss);

// userThree.deleteUser(userOne)
// console.log(userss);