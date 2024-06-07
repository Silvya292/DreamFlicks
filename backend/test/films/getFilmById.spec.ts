import { Test, TestingModule } from '@nestjs/testing';
import { GetFilmById } from '../../src/films/application/getFilmById';
import { FilmRepository } from '../../src/films/domain/repository/filmRepository';
import { Film } from '../../src/films/domain/entities/film';

describe('GetFilmById test', () => {
  let getFilmById: GetFilmById;
  let filmRepositoryMock: Partial<FilmRepository>;

  beforeEach(async () => {
    filmRepositoryMock = {
      findById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetFilmById,
        { provide: FilmRepository, useValue: filmRepositoryMock },
      ],
    }).compile();

    getFilmById = module.get<GetFilmById>(GetFilmById);
  });

  const film = new Film(1, 'title', 'poster', 'releaseDate');

  it('should return a film', async () => {
    jest.spyOn(filmRepositoryMock, 'findById').mockResolvedValue(film);

    const expectedFilm = await getFilmById.run(1);

    expect(expectedFilm).toBe(film);
    expect(filmRepositoryMock.findById).toHaveBeenCalledWith(1);
  });

  it('should throw an error', async () => {
    jest
      .spyOn(filmRepositoryMock, 'findById')
      .mockRejectedValue(new Error('error'));

    await expect(getFilmById.run(1)).rejects.toThrow('error');
    expect(filmRepositoryMock.findById).toHaveBeenCalledWith(1);
  });
});
