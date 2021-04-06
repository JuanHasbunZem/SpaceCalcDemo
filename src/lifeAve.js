export default class LifeAverage {
  constructor(lifeAvg, earth, mercury, venus, mars, jupiter) {
    this.lifeAvg = lifeAvg;
    this.earthAvg = earth;
    this.mercuryAvg = mercury;
    this.venusAvg = venus;
    this.marsAvg = mars;
    this.jupiterAvg = jupiter;
  }

  convertLifeAvgs() {
    this.earthAvg = this.lifeAvg / 1;
    this.mercuryAvg = Math.round(this.lifeAvg / 0.24);
    this.venusAvg = Math.round(this.lifeAvg / 0.62);
    this.marsAvg = Math.round(this.lifeAvg / 1.88);
    this.jupiterAvg = Math.round(this.lifeAvg / 11.86);
  }
}