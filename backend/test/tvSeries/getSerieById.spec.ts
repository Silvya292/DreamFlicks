import { Test, TestingModule } from '@nestjs/testing';
import { GetSerieById } from '../../src/tvSeries/application/getSerieById';
import { TvSerieRepository } from '../../src/tvSeries/domain/repository/tvSerieRepository';
import { TvSerie } from '../../src/tvSeries/domain/entities/tvSerie';

describe('GetSerieById test', () => {
  let getSerieById: GetSerieById;
  let TvSerieRepositoryMock: Partial<TvSerieRepository>;

  beforeEach(async () => {
    TvSerieRepositoryMock = {
      findById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetSerieById,
        { provide: TvSerieRepository, useValue: TvSerieRepositoryMock },
      ],
    }).compile();

    getSerieById = module.get<GetSerieById>(GetSerieById);
  });

  const serie = new TvSerie(1, 'title', 'poster', 'releaseDate');

  it('should return a tvSerie', async () => {
    jest.spyOn(TvSerieRepositoryMock, 'findById').mockResolvedValue(serie);

    const expectedSerie = await getSerieById.run(1);

    expect(expectedSerie).toBe(serie);
    expect(TvSerieRepositoryMock.findById).toHaveBeenCalledWith(1);
  });

  it('should throw an error', async () => {
    jest
      .spyOn(TvSerieRepositoryMock, 'findById')
      .mockRejectedValue(new Error('error'));

    await expect(getSerieById.run(1)).rejects.toThrow('error');
    expect(TvSerieRepositoryMock.findById).toHaveBeenCalledWith(1);
  });
});
