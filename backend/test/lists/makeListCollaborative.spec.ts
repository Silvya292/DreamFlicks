import { Test, TestingModule } from '@nestjs/testing';
import { MakeListCollaborative } from '../../src/lists/application/makeListCollaborative';
import { ListRepository } from '../../src/lists/domain/repository/listRepository';

describe('MakeListCollaborative test', () => {
  let makeListCollaborative: MakeListCollaborative;
  let listRepositoryMock: Partial<ListRepository>;

  beforeEach(async () => {
    listRepositoryMock = {
      makeListCollaborative: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MakeListCollaborative,
        { provide: ListRepository, useValue: listRepositoryMock },
      ],
    }).compile();

    makeListCollaborative = module.get<MakeListCollaborative>(
      MakeListCollaborative
    );
  });

  const listId = 'list123';
  const userName = 'user123';
  const url = 'https://example.com';

  it('should call makeListCollaborative with the correct parameters', async () => {
    jest
      .spyOn(listRepositoryMock, 'makeListCollaborative')
      .mockResolvedValue(undefined);

    await makeListCollaborative.run(listId, userName, url);

    expect(listRepositoryMock.makeListCollaborative).toHaveBeenCalledWith(
      listId,
      userName,
      url
    );
  });

  it('should handle errors thrown by makeListCollaborative', async () => {
    const errorMessage = 'error';

    jest
      .spyOn(listRepositoryMock, 'makeListCollaborative')
      .mockRejectedValue(new Error(errorMessage));

    await expect(
      makeListCollaborative.run(listId, userName, url)
    ).rejects.toThrow(errorMessage);
  });
});
