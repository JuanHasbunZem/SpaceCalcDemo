export default class SpaceCalc {
  constructor(userAge, earth, mercury, venus, jupiter, avgLife) {
    this.userAge = userAge;
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.jupiter = jupiter;
    this.avgLife = avgLife;
  }

  convertAge() {
    this.userAge = this.userAge * 365;
    return this.userAge;
  }

  mercYears() {
    this.mercury = Math.round(this.userAge * 0.24);
    return this.mercury;
  }

}