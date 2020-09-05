import User from "./user.js"
import Social from "./social.js"

let social = new Social()
let user1 = new User("Bắc", "22", "pt", "1999", "2201")
console.log(user1)
console.log(social.myFriends)
console.log(social.addFriend(user1))
console.log(social.myFriends)
console.log(social.name)
console.log(social.removeFriend("Bắc"))

