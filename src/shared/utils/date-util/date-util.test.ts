import dateFormat from './date.util';

describe('date-util dateFormat', () => {
  it('should format date to dd.mm.yyyy', () => {
    const date = new Date(2021, 2, 12).toString();
    expect(dateFormat(date)).toEqual('12.03.2021');
  });
});
