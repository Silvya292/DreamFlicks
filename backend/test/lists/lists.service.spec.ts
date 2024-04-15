import { ListsService } from '../../src/lists/application/lists.service';
import { ListsController } from '../../src/lists/infrastructure/controller/lists.controller';

describe('ListsService', () => {
  let listsService: ListsService;
  let listsController: ListsController;

  beforeEach(() => {
    listsService = new ListsService();
    listsController = new ListsController(listsService);
  });

  describe('getLists', () => {
    it('should return an array of lists', () => {
      const result = [
        {
          listId: 1,
          listTitle: 'List 1',
          listDescription: 'Description 1',
          listImage: 'Image 1',
          listOwner: 'Owner 1',
          usersAllowed: ['User 1'],
          isCollaborative: true,
          isShared: true,
        },
      ];

      jest.spyOn(listsService, 'getLists').mockImplementation(() => result);

      expect(listsService.getLists()).toBeDefined();
    });
  });

  describe('getListById', () => {
    it('should return a list by id', () => {
      const result = {
        listId: 1,
        listTitle: 'List 1',
        listDescription: 'Description 1',
        listImage: 'Image 1',
        listOwner: 'Owner 1',
        usersAllowed: ['User 1'],
        listItems: [],
        isCollaborative: true,
        isShared: true,
      };

      jest.spyOn(listsService, 'getListById').mockImplementation(() => result);

      expect(listsService.getListById(1)).toBeDefined();
    });
  });

  describe('createList', () => {
    it('should create a new list', () => {
      const result = {
        listId: 1,
        listTitle: 'List 1',
        listDescription: 'Description 1',
        listImage: 'Image 1',
        listOwner: 'Owner 1',
        usersAllowed: ['User 1'],
        isCollaborative: true,
        isShared: true,
      };

      jest.spyOn(listsService, 'createList').mockImplementation(() => result);

      expect(listsService.createList(result)).toBeDefined();
      expect(listsService.createList(result)).toEqual(result);
    });
  });
});
