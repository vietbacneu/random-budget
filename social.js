
export default class Social {
    constructor() {
        this.myFriends = []
        this.name
    }
    addFriend(temp) {
        if (temp.money > 2000 ) {
            this.myFriends.push(temp)
            this.name=temp.name
            return this.myFriends
        }
        else return this.myFriends

    }
    removeFriend(temp) {
        if (temp == this.name)
        {
            delete this.myFriends[0]
            return this.myFriends
        }
        else return this.myFriends
    }
}
