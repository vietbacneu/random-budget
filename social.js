
export default class Social {
    constructor() {
        this.myFriends =[]
        this.name=[]
    }
    addFriend(temp) {
        if (temp.money > 2000) {
            let temp1 = {
                name: temp.name, money: temp.money, age: temp.age, address: temp.address, dateOfBirth: temp.dateOfBirth
            }
            this.myFriends.push(temp1)
            this.name.push(temp.name)
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
            this.myFriends.splice(i)
            return this.myFriends
            }
        }
     return this.myFriends
    }
}
