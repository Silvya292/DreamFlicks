import { Test, TestingModule } from '@nestjs/testing';
import { GetPopular } from '../../src/tvSeries/application/getPopular';
import { TvSerieRepository } from '../../src/tvSeries/domain/repository/tvSerieRepository';
import { TvSerie } from '../../src/tvSeries/domain/entities/tvSerie';

describe('GetPopular test', () => {
  let getPopular: GetPopular;
  let TvSerieRepositoryMock: Partial<TvSerieRepository>;

  beforeEach(async () => {
    TvSerieRepositoryMock = {
      getPopular: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetPopular,
        { provide: TvSerieRepository, useValue: TvSerieRepositoryMock },
      ],
    }).compile();

    getPopular = module.get<GetPopular>(GetPopular);
  });

  const series = [
    new TvSerie(1, 'title', 'poster', 'releaseDate'),
    new TvSerie(2, 'title', 'poster', 'releaseDate'),
  ];

  it('should return list of popular tvSeries', async () => {
    jest.spyOn(TvSerieRepositoryMock, 'getPopular').mockResolvedValue(series);

    const expectedSeries = await getPopular.run();

    expect(expectedSeries).toBe(series);
    expect(TvSerieRepositoryMock.getPopular).toHaveBeenCalled();
  });

  it('should throw an error', async () => {
    jest
      .spyOn(TvSerieRepositoryMock, 'getPopular')
      .mockRejectedValue(new Error('error'));

    await expect(getPopular.run()).rejects.toThrow('error');
    expect(TvSerieRepositoryMock.getPopular).toHaveBeenCalled();
  });
});
