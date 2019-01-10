function Shape() {

}

Shape.prototype.draw = function() {
    console.info('This is generic shape !!!')
}

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    console.info('This is circle shape !!!')
}

const circle = new Circle();
circle.draw();

function Square() {}

Square.prototype = Object.create(Shape.prototype);

const square = new Square();
square.draw();