// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for ( let i = 0; i < this.sides.length; i++) {
      sum += this.sides[i];
    }
    return sum
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get inValid() {
    if (Array.isArray) return;
      let a = this.sides[0]
      let b = this.sides[1]
      let c = this.sides[2]
      let d = this.sides[3]
  }
}
