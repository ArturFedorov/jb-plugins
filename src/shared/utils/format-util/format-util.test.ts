import { formatNumber, createArrayFromNumber } from './format.util';

describe('format-util', () => {
  it('formatNumber should format number to string 0 000 000', () => {
    const test1 = 987345;
    const test2 = 98975674;
    const test3 = 988;

    expect(formatNumber(test1)).toEqual('987 345');
    expect(formatNumber(test2)).toEqual('98 975 674');
    expect(formatNumber(test3)).toEqual('988');
  });

  it('createArrayFromNumber should create array of sequence of numbers', () => {
    expect(createArrayFromNumber(5)).toEqual([0, 1, 2, 3, 4]);
    expect(createArrayFromNumber(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
