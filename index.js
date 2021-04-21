// Your code here
class Polygon {
  constructor(arrayofintegers) {
    this.arrayofintegers = arrayofintegers
    this.count = this.arrayofintegers.length
  }

  get countSides() {
    return this.arrayofintegers.length;
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
    // checks if the given 3 sides for a triangle is valid.
    if (!Array.isArray(this.arrayofintegers)) return;
      if (this.count !== 3) return;
      let a = this.arrayofintegers[0]
      let b = this.arrayofintegers[1]
      let c = this.arrayofintegers[2]
      return ((a + b > c) && (b + C > a) && (c + a > b))
    // the sume of the lengths of any two sides of a tiangle is greatert han the length of the thrid side. if you take the three sides of a trianald and add them in paris, the sum is greatino than (not equal to) the thrid side. If that is not true, then it is not possible to construct a trianld w ith the given side lengths.
  }
}

class Square extends Polygon {
  get inValid() {
    if (Array.isArray) return;
      let a = this.arrayofintegers[0]
      let b = this.arrayofintegers[1]
      let c = this.arrayofintegers[2]
      let d = this.arrayofintegers[3]
  }
}
