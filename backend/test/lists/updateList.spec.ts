import { Test, TestingModule } from '@nestjs/testing';
import { UpdateList } from '../../src/lists/application/updateList';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';
import { UpdateListDto } from '../../src/dto/updateList.dto';
import { List } from '../../src/lists/domain/entities/list';

describe('UpdateList test', () => {
  let updateList: UpdateList;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      updateList: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateList,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    updateList = module.get<UpdateList>(UpdateList);
  });

  const listId = 'listId';
  const updatedListData: UpdateListDto = {
    title: 'New Title',
    description: 'New Description',
    image: 'newImage.png',
  };

  it('should call updateList with the correct parameters', async () => {
    const list = new List(
      listId,
      'New Title',
      'New Description',
      'newImage.png',
      'owner',
      [],
      true,
      true,
      []
    );

    jest.spyOn(listRepositoryMock, 'updateList').mockResolvedValue(list);

    const result = await updateList.run(listId, updatedListData);
    expect(listRepositoryMock.updateList).toHaveBeenCalledWith(
      listId,
      updatedListData
    );
    expect(result).toEqual(list);
  });

  it('should handle errors thrown by updateList', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'updateList')
      .mockRejectedValue(new Error(errorMessage));

    await expect(updateList.run(listId, updatedListData)).rejects.toThrow(
      errorMessage
    );
  });
});
