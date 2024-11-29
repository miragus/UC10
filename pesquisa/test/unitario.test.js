import { sum } from "../unitario";

describe('sum()', () => {
  it('should sum two positive numbers', () => {
    const actual = sum(1, 2);
    const expected = 3;
    expect(actual).toEqual(expected);
  });

  it('should sum positive and negative numbers', () => {
    const actual = sum(-3, 10);
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});


