import SpaceCalc from './../src/spaceCalc.js';

describe('SpaceCalc', () => {
  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new SpaceCalc(7);
  });

  test('should correctly create a SpaceCalc object', () => {
    expect(reusableCalc.userAge).toEqual(7);
  });

  test('should correctly calculate your age on Mercury', () => {
    expect(reusableCalc.mercury).toEqual(29);
  });

  test('should correctly calculate your age on Venus', () => {
    expect(reusableCalc.venus).toEqual(1);
  });
});