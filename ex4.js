function Animal(name) {
    this.name = name
}
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`)
}
function dog(name){
    Animal.call(this, name)
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function() {
    console.log(`${this.name} barks`);
}

const rocky = new Dog("Rocky")
rocky.speak()
rocky.bark()