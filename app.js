class Circle {
  static pi = 3.14;

  constructor(radius) {
    this.radius = radius;
  }

  //calculate the area of a circle
  static area(radius) {
    return this.pi * radius * radius;
  }

  // Instance method to calculate the circumference of a circle
  circumference() {
    return 2 * Circle.pi * this.radius;
  }
}

// Accessing static property
console.log("Value of pi:", Circle.pi);

// Accessing static method
console.log("Area of a circle with radius 8:", Circle.area(8));
console.log("Area of a circle with radius 64:", Circle.area(64));

// Creating instances of Circle class
const firstCircle = new Circle(42);
const secondCircle = new Circle(64);

// Accessing instance method
console.log("Circumference of firstCircle:", firstCircle.circumference());
console.log("Circumference of secondCircle:", secondCircle.circumference());
