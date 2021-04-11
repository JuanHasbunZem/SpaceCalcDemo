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
    expect(reusableObj.mercuryAvg).toEqual(325);
  });
  
  test('should correctly find the life average on Venus', () => {
    expect(reusableObj.venusAvg).toEqual(126);
  });

  test('should correctly find the life average on Mars', () => {
    expect(reusableObj.marsAvg).toEqual(41);
  });

  test('should correctly find the life average on Jupiter', () => {
    expect(reusableObj.jupiterAvg).toEqual(7);
  });

  test('Should correctly compare each life expectancy, then display the difference of user input with lifeAvg', () => {
    expect(checkLife(17, 77, "Earth")).toEqual("You have 60 year(s) left!");
  });

});