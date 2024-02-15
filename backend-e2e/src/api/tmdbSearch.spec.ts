import axios from 'axios';
import dotenv from 'dotenv';

describe('TMDB API search', () => {
  dotenv.config();
  const apiKey = process.env.TMDB_API_KEY;

  it('should return a minions search', async () => {
    const query = 'minions';

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
    );

    expect(response.status).toBe(200);
    expect(response.data.results[0].title).toBe('Minions');
  });

  it('should return Minions film', async () => {
    const movieId = 211672;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}`
    );

    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Minions');
  });
});
