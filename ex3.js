function BankAccount(owner, balance) {
    this.owner = owner
    this.balance = balance
}
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount
}
BankAccount.prototype.withdraw =function(amount) {
    if(this.balance>=amount){
        this.balance -= amount
    }
    else {
        console.log("Insufficient funds!")
    }
}
BankAccount.prototype.checkBalance = function() {
    console.log(`Balance: ${this.balance}`)
}

const myAccount = new BankAccount("Yael", 1000)
myAccount.deposit(500)
myAccount.withdraw(50)
myAccount.checkBalance()

