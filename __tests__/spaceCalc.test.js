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
    expect(reusableCalc.mercury).toEqual(7);
  });
});