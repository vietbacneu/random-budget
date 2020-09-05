import User from "./user.js"
import Social from "./social.js"

let social = new Social()
let user1 = new User("Bắc", "22", "pt", "1999", "2200")
let user2 = new User("Bắc1", "22", "pt", "1999", "2200")

console.log(user1)
console.log(social.myFriends)
console.log(social.addFriend(user1))
console.log(social.addFriend(user2))

console.log(social.myFriends)
console.log(social.removeFriend("Bắc1"))

