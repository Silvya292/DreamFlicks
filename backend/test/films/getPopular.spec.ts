import { Test, TestingModule } from '@nestjs/testing';
import { GetPopular } from '../../src/films/application/getPopular';
import { FilmRepository } from '../../src/films/domain/repository/filmRepository';
import { Film } from '../../src/films/domain/entities/film';

describe('GetPopular test', () => {
  let getPopular: GetPopular;
  let filmRepositoryMock: Partial<FilmRepository>;

  beforeEach(async () => {
    filmRepositoryMock = {
      getPopular: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetPopular,
        { provide: FilmRepository, useValue: filmRepositoryMock },
      ],
    }).compile();

    getPopular = module.get<GetPopular>(GetPopular);
  });

  const films = [
    new Film(1, 'title', 'poster', 'releaseDate'),
    new Film(2, 'title', 'poster', 'releaseDate'),
  ];

  it('should return a list of popular films', async () => {
    jest.spyOn(filmRepositoryMock, 'getPopular').mockResolvedValue(films);

    const expectedFilms = await getPopular.run();

    expect(expectedFilms).toBe(films);
    expect(filmRepositoryMock.getPopular).toHaveBeenCalled();
  });

  it('should throw an error', async () => {
    jest
      .spyOn(filmRepositoryMock, 'getPopular')
      .mockRejectedValue(new Error('error'));

    await expect(getPopular.run()).rejects.toThrow('error');
    expect(filmRepositoryMock.getPopular).toHaveBeenCalled();
  });
});
