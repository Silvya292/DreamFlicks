import { Test, TestingModule } from '@nestjs/testing';
import { SearchByTitle } from '../../src/films/application/searchByTitle';
import { FilmRepository } from '../../src/films/domain/repository/filmRepository';
import { Film } from '../../src/films/domain/entities/film';

describe('SearchByTitle test', () => {
  let searchByTitle: SearchByTitle;
  let filmRepositoryMock: Partial<FilmRepository>;

  beforeEach(async () => {
    filmRepositoryMock = {
      search: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchByTitle,
        { provide: FilmRepository, useValue: filmRepositoryMock },
      ],
    }).compile();

    searchByTitle = module.get<SearchByTitle>(SearchByTitle);
  });

  const films = [
    new Film(1, 'title', 'poster', 'releaseDate'),
    new Film(2, 'title', 'poster', 'releaseDate'),
  ];
  const query = 'title';

  it('should return a list of films that follows the query', async () => {
    jest.spyOn(filmRepositoryMock, 'search').mockResolvedValue(films);

    const expectedFilms = await searchByTitle.run(query);

    expect(expectedFilms).toBe(films);
    expect(filmRepositoryMock.search).toHaveBeenCalledWith('title');
  });

  it('should throw an error', async () => {
    jest
      .spyOn(filmRepositoryMock, 'search')
      .mockRejectedValue(new Error('error'));

    await expect(searchByTitle.run(query)).rejects.toThrow('error');
    expect(filmRepositoryMock.search).toHaveBeenCalledWith('title');
  });
});
