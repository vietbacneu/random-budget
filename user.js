export default class User {
    constructor(name, age, address, dateOfBirth, money) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth
        this.money = money
        this.address = address
    }

    hello() {
        return "tôi là " + this.name
    }
    balance() {
        return this.money;
    }
    addMoney(value) {
        return ` tổng tiền là ${this.money += value}`
    }
}

