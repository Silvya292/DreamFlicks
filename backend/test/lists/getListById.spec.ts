import { Test, TestingModule } from '@nestjs/testing';
import { GetListById } from '../../src/lists/application/getListById';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';
import { List } from '../../src/lists/domain/entities/list';

describe('GetListById test', () => {
  let getListById: GetListById;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      getListById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetListById,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    getListById = module.get<GetListById>(GetListById);
  });

  it('should call getListById with the correct parameters', async () => {
    const listId = 'listId';
    const list = new List(
      listId,
      'title',
      'description',
      'image',
      'owner',
      [],
      true,
      true,
      [{ id: 1, type: 'movie' }]
    );

    jest.spyOn(listRepositoryMock, 'getListById').mockResolvedValue(list);

    const expectedList = await getListById.run(listId);
    expect(listRepositoryMock.getListById).toHaveBeenCalledWith(listId);
    expect(expectedList).toBe(list);
  });

  it('should handle errors thrown by getListById', async () => {
    const listId = 'listId';
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'getListById')
      .mockRejectedValue(new Error(errorMessage));

    await expect(getListById.run(listId)).rejects.toThrow(errorMessage);
  });
});
