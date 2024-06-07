import { Test, TestingModule } from '@nestjs/testing';
import { GetLists } from '../../src/lists/application/getLists';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';
import { List } from '../../src/lists/domain/entities/list';

describe('GetLists test', () => {
  let getLists: GetLists;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      getLists: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetLists,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    getLists = module.get<GetLists>(GetLists);
  });

  const userId = 'user';

  it('should call getLists with the correct parameters', async () => {
    const lists: List[] = [
      new List(
        'list1',
        'Title 1',
        'Description 1',
        'Image 1',
        'Owner 1',
        [],
        true,
        true,
        []
      ),
      new List(
        'list2',
        'Title 2',
        'Description 2',
        'Image 2',
        'Owner 2',
        [],
        true,
        true,
        []
      ),
    ];

    jest.spyOn(listRepositoryMock, 'getLists').mockResolvedValue(lists);

    const expectedLists = await getLists.run(userId);

    expect(listRepositoryMock.getLists).toHaveBeenCalledWith(userId);
    expect(expectedLists).toEqual(lists);
  });

  it('should handle errors thrown by getLists', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'getLists')
      .mockRejectedValue(new Error(errorMessage));

    await expect(getLists.run(userId)).rejects.toThrow(errorMessage);
  });
});
