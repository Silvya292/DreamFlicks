import posterConcat from '../../src/shared/posterConcat';

describe('posterConcat test', () => {
  it('should concatenate the base URL with the poster path', () => {
    const posterPath = '/path/to/poster.jpg';

    const result = posterConcat(posterPath);

    const expectedUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
    expect(result).toBe(expectedUrl);
  });
});
