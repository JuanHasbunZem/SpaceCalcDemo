import SpaceCalc from './../src/spaceCalc.js';

describe('SpaceCalc', () => {
  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new SpaceCalc(7,1,2,3,4,5,78);
  });

  test('should correctly create a SpaceCalc object', () => {
    expect(reusableCalc.userAge).toEqual(7);
    expect(reusableCalc.earth).toEqual(1);
    expect(reusableCalc.mercury).toEqual(2);
    expect(reusableCalc.venus).toEqual(3);
    expect(reusableCalc.mars).toEqual(4);
    expect(reusableCalc.jupiter).toEqual(5);
    expect(reusableCalc.avgLife).toEqual(78);
  });

  test('should convert userAge from earth to cooresponding planets years', () => {
    reusableCalc.convertAge();
    expect(reusableCalc.earth).toEqual(7);
    expect(reusableCalc.mercury).toEqual(29);
    expect(reusableCalc.venus).toEqual(11);
    expect(reusableCalc.mars).toEqual(4);
    expect(reusableCalc.jupiter).toEqual(1)
  });
});