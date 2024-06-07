import { Test, TestingModule } from '@nestjs/testing';
import { CreateList } from '../../src/lists/application/createList';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';
import { CreateListDto } from '../../src/dto/createList.dto';
import { List } from '../../src/lists/domain/entities/list';

describe('CreateList test', () => {
  let createList: CreateList;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      createList: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateList,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    createList = module.get<CreateList>(CreateList);
  });

  const listDto: CreateListDto = {
    listId: 'list123',
    title: 'My List',
    description: 'A description',
    image: 'image.png',
    owner: 'owner123',
    isShared: true,
    items: [],
  };
  const userName = 'user123';

  it('should call createList with the correct parameters', async () => {
    const list = new List(
      'list123',
      'My List',
      'A description',
      'image.png',
      'owner123',
      [],
      true,
      true,
      []
    );

    jest.spyOn(listRepositoryMock, 'createList').mockResolvedValue(list);

    const expectedList = await createList.run(listDto, userName);

    expect(listRepositoryMock.createList).toHaveBeenCalledWith(
      listDto,
      userName
    );
    expect(expectedList).toBe(list);
  });

  it('should handle errors thrown by createList', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'createList')
      .mockRejectedValue(new Error(errorMessage));

    await expect(createList.run(listDto, userName)).rejects.toThrow(
      errorMessage
    );
  });
});
