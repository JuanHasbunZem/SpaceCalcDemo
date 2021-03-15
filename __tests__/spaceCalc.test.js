import SpaceCalc from './../src/spaceCalc.js';

describe('SpaceCalc', () => {
  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new SpaceCalc(7,3,1,0,5,78);
  });

  test('should correctly create a SpaceCalc object', () => {
    expect(reusableCalc.userAge).toEqual(7);
    expect(reusableCalc.earth).toEqual(3);
    expect(reusableCalc.mercury).toEqual(1);
    expect(reusableCalc.venus).toEqual(0);
    expect(reusableCalc.jupiter).toEqual(5);
    expect(reusableCalc.avgLife).toEqual(78);
  });

  test('should convert userAge from years to days', () => {
    expect(reusableCalc.convertAge()).toEqual(2555);
  });

  test('should convert userAge from earth years to mercury years', () => {
    expect(reusableCalc.mercYears()).toEqual(2);
  });

  test('should convert userAge from earth years to venus years', () => {
    expect(reusableCalc.venusYears()).toEqual(4);
  });
});