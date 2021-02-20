var circle = /** @class */ (function () {
    function circle(radius, color) {
        if (radius === void 0) { radius = 1.0; }
        if (color === void 0) { color = "red"; }
        this.radius = radius;
        this.color = color;
    }
    circle.prototype.getRadius = function () {
        return this.radius;
    };
    circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    circle.prototype.getColor = function () {
        return this.color;
    };
    circle.prototype.setColor = function (color) {
        this.color = color;
    };
    circle.prototype.toString = function () {
        return "radius = " + this.radius + " color = " + this.color;
    };
    circle.prototype.getArea = function () {
        var area = Math.PI * this.radius * this.radius;
        return parseFloat(area.toFixed(2));
    };
    circle.prototype.getCircumference = function () {
        var circumference = 2 * Math.PI * this.radius;
        return parseFloat(circumference.toFixed(2));
    };
    return circle;
}());
var newCircle = new circle();
console.log(newCircle.getColor(), newCircle.getRadius(), newCircle.getArea());
console.log(newCircle.toString());
newCircle.setColor('blue');
newCircle.setRadius(2.0);
console.log(newCircle.getColor(), newCircle.getRadius(), newCircle.getArea(), newCircle.getCircumference());
