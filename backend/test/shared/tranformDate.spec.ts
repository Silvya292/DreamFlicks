import transformDate from '../../src/shared/transformDate';

describe('transformDate test', () => {
  it('should transform a valid date string to the expected format', () => {
    const date = '2024-03-09';

    const result = transformDate(date);

    const expectedDate = '09 mar 2024';
    expect(result).toBe(expectedDate);
  });

  it('should throw an error for invalid date format', () => {
    const date = '2024/03/09';

    expect(() => transformDate(date)).toThrow();
  });

  it('should throw an error for empty string input', () => {
    const date = '';

    expect(() => transformDate(date)).toThrow();
  });
});
