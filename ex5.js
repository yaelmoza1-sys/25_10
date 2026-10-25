function Vehicle(type) {
    this.type = type
}
Vehicle.prototype.describe = function() {
    console.log(`This is a ${this.type}`)
}
function Car(brand, type){
    Vehicle.call(this, type)
    this.brand = brand
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.info = function() {
    console.log(`This is a ${this.brand} ${this.type}`)
}