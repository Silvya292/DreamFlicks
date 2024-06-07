import { Test, TestingModule } from '@nestjs/testing';
import { DeleteItem } from '../../src/lists/application/deleteItem';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';

describe('DeleteItem test', () => {
  let deleteItem: DeleteItem;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      deleteItem: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteItem,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    deleteItem = module.get<DeleteItem>(DeleteItem);
  });

  const listId = 'list123';
  const itemId = 123;

  it('should call deleteItem with the correct parameters', async () => {
    jest.spyOn(listRepositoryMock, 'deleteItem').mockResolvedValue(undefined);

    await deleteItem.run(listId, itemId);

    expect(listRepositoryMock.deleteItem).toHaveBeenCalledWith(listId, itemId);
  });

  it('should handle errors thrown by deleteItem', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'deleteItem')
      .mockRejectedValue(new Error(errorMessage));

    await expect(deleteItem.run(listId, itemId)).rejects.toThrow(errorMessage);
  });
});
