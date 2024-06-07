import trailerConcat from '../../src/shared/trailerConcat';

describe('trailerConcat test', () => {
  it('should concatenate the base URL with the trailer ID', () => {
    const trailerId = 'abc123';

    const result = trailerConcat(trailerId);

    const expectedUrl = `https://www.youtube.com/embed/${trailerId}`;
    expect(result).toBe(expectedUrl);
  });
});
