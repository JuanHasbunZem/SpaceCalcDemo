import LifeAverage from './../src/lifeAve.js';

describe('LifeAverage', () => {
  let reusableObj;

  beforeEach(() => {
    reusableObj = new LifeAverage(78, 1, 2, 3, 4, 5);
  });

  test('should correctly create a LifeAverage object', () => {
    expect(reusableObj.lifeAvg).toEqual(78);
    expect(reusableObj.earthAvg).toEqual(1);
    expect(reusableObj.mercuryAvg).toEqual(2);
    expect(reusableObj.venusAvg).toEqual(3);
    expect(reusableObj.marsAvg).toEqual(4);
    expect(reusableObj.jupiterAvg).toEqual(5);
  });
});