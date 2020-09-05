
export default class Social {
    constructor() {
        this.myFriends =[]
        this.name=null
    }
    addFriend(temp) {
        if (temp.money > 2000) {
            this.myFriends.push(temp)
            return this.myFriends
        }
        else {
            return this.myFriends
        }

    }
    removeFriend(temp) {
        for (var i = 0; i < this.myFriends.length;i++){
        if (temp == this.myFriends[i].name)
        {   
            delete  this.myFriends[i]
            return this.myFriends
            }
        }
     return this.myFriends
    }
}
