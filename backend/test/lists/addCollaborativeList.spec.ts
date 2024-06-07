import { Test, TestingModule } from '@nestjs/testing';
import { AddCollaborativeList } from '../../src/lists/application/addCollaborativeList';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';

describe('AddCollaborativeList test', () => {
  let addCollaborativeList: AddCollaborativeList;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      addCollaborativeList: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddCollaborativeList,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    addCollaborativeList =
      module.get<AddCollaborativeList>(AddCollaborativeList);
  });

  const listId = 'list';
  const userId = 'user';

  it('should call addCollaborativeList with the correct parameters', async () => {
    await addCollaborativeList.run(listId, userId);

    expect(listRepositoryMock.addCollaborativeList).toHaveBeenCalledWith(
      listId,
      userId
    );
  });

  it('should handle errors thrown by addCollaborativeList', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'addCollaborativeList')
      .mockRejectedValue(new Error(errorMessage));

    await expect(addCollaborativeList.run(listId, userId)).rejects.toThrow(
      errorMessage
    );
  });
});
