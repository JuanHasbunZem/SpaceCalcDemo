export default class SpaceCalc {
  constructor(userAge) {
    this.userAge = userAge;
    this.earth = Math.round(this.userAge / 1.00);
    this.mercury = Math.round(this.userAge / 0.24);
    this.venus = Math.round(this.userAge / 0.62);
    this.mars = Math.round(this.userAge / 1.88);
    this.jupiter = Math.round(this.userAge / 11.86);
  }
}