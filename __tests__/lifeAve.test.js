import LifeAverage from './../src/lifeAve.js';

describe('LifeAverage', () => {
  let reusableObj;

  beforeEach(() => {
    reusableObj = new LifeAverage(78);
  });

  test('should correctly create a LifeAverage object', () => {
    expect(reusableObj.lifeAvg).toEqual(78);
  });

  test('should correctly find the life average on Mercury', () => {
    expect(reusableObj.mercuryAvg).toEqual(78);
  });
});