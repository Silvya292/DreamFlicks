import transformDate from '../../src/shared/transformDate';

describe('transformDate test', () => {
  it('should transform a valid date string to the expected format', () => {
    const date = '2024-03-09';

    const result = transformDate(date);

    const expectedDate = '09 mar 2024';
    expect(result).toBe(expectedDate);
  });
});
