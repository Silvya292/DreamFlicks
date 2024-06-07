import { Test, TestingModule } from '@nestjs/testing';
import { DeleteListById } from '../../src/lists/application/deleteList';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';

describe('DeleteListById test', () => {
  let deleteListById: DeleteListById;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      deleteListById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteListById,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    deleteListById = module.get<DeleteListById>(DeleteListById);
  });

  const listId = 'list123';

  it('should call deleteListById with the correct parameters', async () => {
    jest
      .spyOn(listRepositoryMock, 'deleteListById')
      .mockResolvedValue(undefined);

    await deleteListById.run(listId);

    expect(listRepositoryMock.deleteListById).toHaveBeenCalledWith(listId);
  });

  it('should handle errors thrown by deleteListById', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'deleteListById')
      .mockRejectedValue(new Error(errorMessage));

    await expect(deleteListById.run(listId)).rejects.toThrow(errorMessage);
  });
});
