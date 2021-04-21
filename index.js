// Your code here
class Polygon {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  get countSides() {
    return this.sideLength.length;
  }

  get perimeter() {
    let sum = 0;
    for ( let i = 0; i < this.sideLength.length; i++) {
      sum += this.sideLength[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}
