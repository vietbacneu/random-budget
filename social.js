
export default class Social {
    constructor() {
        this.myFriends =null
        this.name=null
    }
    addFriend(temp) {
        if (temp.money > 2000) {
            this.myFriends = []
            this.myFriends.push(temp)
            this.name = temp.name
            return this.myFriends
        }
        else {
            this.myFriends = []
            return this.myFriends
        }

    }
    removeFriend(temp) {
        if (temp == this.name)
        {
            delete this.myFriends
            return []
        }
        else return this.myFriends
    }
}
