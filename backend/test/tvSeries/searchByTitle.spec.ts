import { Test, TestingModule } from '@nestjs/testing';
import { SearchByTitle } from '../../src/tvSeries/application/searchByTitle';
import { TvSerieRepository } from '../../src/tvSeries/domain/repository/tvSerieRepository';
import { TvSerie } from '../../src/tvSeries/domain/entities/tvSerie';

describe('SearchByTitle test', () => {
  let searchByTitle: SearchByTitle;
  let TvSerieRepositoryMock: Partial<TvSerieRepository>;

  beforeEach(async () => {
    TvSerieRepositoryMock = {
      search: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchByTitle,
        { provide: TvSerieRepository, useValue: TvSerieRepositoryMock },
      ],
    }).compile();

    searchByTitle = module.get<SearchByTitle>(SearchByTitle);
  });

  const series = [
    new TvSerie(1, 'title', 'poster', 'releaseDate'),
    new TvSerie(2, 'title', 'poster', 'releaseDate'),
  ];
  const query = 'title';

  it('should return a list of tvSeries that follows the query', async () => {
    jest.spyOn(TvSerieRepositoryMock, 'search').mockResolvedValue(series);

    const expectedSeries = await searchByTitle.run(query);

    expect(expectedSeries).toBe(series);
    expect(TvSerieRepositoryMock.search).toHaveBeenCalled();
  });

  it('should throw an error', async () => {
    jest
      .spyOn(TvSerieRepositoryMock, 'search')
      .mockRejectedValue(new Error('error'));

    await expect(searchByTitle.run(query)).rejects.toThrow('error');
    expect(TvSerieRepositoryMock.search).toHaveBeenCalled();
  });
});
