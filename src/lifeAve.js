export default class LifeAverage {
  constructor(lifeAvg) {
    this.lifeAvg = lifeAvg;
    this.mercuryAvg = Math.round(this.lifeAvg / 0.24);
    this.venusAvg = Math.round(this.lifeAvg / 0.62);
    this.marsAvg = Math.round(this.lifeAvg / 1.88);
    this.jupiterAvg = Math.round(this.lifeAvg / 11.86);
  }

  checkLife() {
  }
}