function Shape() {}

Shape.prototype.area = function() {
    return 0;
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * (this.radius ** 2);
};

function Square(side) {
    this.side = side
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.area = function() {
    return this.side ** 2
}

const myCircle = new Circle(3)
console.log(myCircle.area())

const mySquare = new Square(4)
console.log(mySquare.area())