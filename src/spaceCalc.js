export default class SpaceCalc {
  constructor(userAge, earth, mercury, venus, mars, jupiter, avgLife) {
    this.userAge = userAge;
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.avgLife = avgLife;
  }

  convertAge() {
    this.earth = Math.round(this.userAge / 1.00);
    this.mercury = Math.round(this.userAge / 0.24);
    this.venus = Math.round(this.userAge / 0.62);
    this.mars = Math.round(this.userAge / 1.88);
    this.jupiter = Math.round(this.userAge / 11.86);
  }

}