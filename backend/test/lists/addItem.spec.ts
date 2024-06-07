import { Test, TestingModule } from '@nestjs/testing';
import { AddItem } from '../../src/lists/application/addItem';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';
import { List } from '../../src/lists/domain/entities/list';
import { ListItem } from '../../src/lists/domain/entities/item.interface';

describe('AddItem test', () => {
  let addItem: AddItem;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      getListById: jest.fn(),
      addItem: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddItem,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    addItem = module.get<AddItem>(AddItem);
  });

  const listId = 'listId';
  const item: ListItem = { id: 123, type: 'movie' };
  const list = new List(
    listId,
    'title',
    'description',
    'image',
    'owner',
    [],
    true,
    true,
    []
  );

  it('should call getListById with the correct parameters', async () => {
    jest.spyOn(listRepositoryMock, 'getListById').mockResolvedValue(list);

    await addItem.run(listId, item);

    expect(listRepositoryMock.getListById).toHaveBeenCalledWith(listId);
  });

  it('should throw an error if the item already exists in the list', async () => {
    const listWithItem = new List(
      listId,
      'title',
      'description',
      'image',
      'owner',
      [],
      true,
      true,
      [{ id: 123, type: 'movie' }]
    );

    jest
      .spyOn(listRepositoryMock, 'getListById')
      .mockResolvedValue(listWithItem);

    await expect(addItem.run(listId, item)).rejects.toThrow(
      'Item already exists in list'
    );
  });

  it('should call addItem with the correct parameters if the item does not exist in the list', async () => {
    jest.spyOn(listRepositoryMock, 'getListById').mockResolvedValue(list);
    jest.spyOn(listRepositoryMock, 'addItem').mockResolvedValue(undefined);

    await addItem.run(listId, item);

    expect(listRepositoryMock.addItem).toHaveBeenCalledWith(listId, item);
  });

  it('should handle errors thrown by getListById', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'getListById')
      .mockRejectedValue(new Error(errorMessage));

    await expect(addItem.run(listId, item)).rejects.toThrow(errorMessage);
  });

  it('should handle errors thrown by addItem', async () => {
    const errorMessage = 'error';

    jest.spyOn(listRepositoryMock, 'getListById').mockResolvedValue(list);
    jest
      .spyOn(listRepositoryMock, 'addItem')
      .mockRejectedValue(new Error(errorMessage));

    await expect(addItem.run(listId, item)).rejects.toThrow(errorMessage);
  });
});
