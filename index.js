class Polygon {
  constructor(arrayofintegers) {
    this.sides = arrayofintegers
    this.count = this.arrayofintegers.length
  }

  get countSides() {
    return this.arrayofintegers.length
  }

  get perimeter() {
    if (!Array.isArray(this.arrayofintegers)) return;
    let sum = 0;
    for (var int of this.arrayofintegers) {
      sum += int
    }
    return sum
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.arrayofintegers)) return;
    if (this.count !== 3) return;
    let side1 = this.arrayofintegers[0]
    let side2 = this.arrayofintegers[1]
    let side3 = this.arrayofintegers[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.arrayofintegers)) return;
    if (this.count !== 4) return;
    let side1 = this.arrayofintegers[0]
    let side2 = this.arrayofintegers[1]
    let side3 = this.arrayofintegers[2]
    let side4 = this.arrayofintegers[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]
  }
}
