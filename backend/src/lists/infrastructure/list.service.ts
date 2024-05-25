import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import { List } from '../domain/entities/list';
import { CreateListDto } from '../../dto/createList.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListItem } from '../domain/entities/item.interface';
import { UpdateListDto } from 'backend/src/dto/updateList.dto';
import { MailService } from 'backend/src/mailService/infrastructure/mail.service';

@Injectable()
export class ListService implements ListRepository {
  constructor(
    @InjectModel(List.name) private listModel: Model<List>,
    private mailService: MailService
  ) {}

  async getLists(userId: string): Promise<List[]> {
    return this.listModel
      .find({
        $or: [{ owner: userId }, { usersAllowed: userId }],
      })
      .exec();
  }

  async getListById(id: string): Promise<List> {
    const list = await this.listModel.findOne({ listId: id }).exec();
    return list;
  }

  async createList(list: CreateListDto, userName: string): Promise<List> {
    const createdList = new this.listModel(list);
    this.mailService.sendMailCreateList(list.owner, userName, list.title);
    return createdList.save();
  }

  async updateList(id: string, data: UpdateListDto): Promise<List> {
    return this.listModel
      .findOneAndUpdate({ listId: id }, data, { new: true })
      .exec();
  }

  async deleteListById(id: string): Promise<void> {
    this.listModel.deleteOne({ listId: id }).exec();
  }

  async makeListCollaborative(
    id: string,
    userName: string,
    url: string
  ): Promise<void> {
    const list = await this.listModel.findOne({ listId: id }).exec();
    if (!list.isCollaborative) {
      this.mailService.sendMailCollaborativeList(
        list.owner,
        userName,
        list.title,
        url
      );
    }
    this.listModel.findOneAndUpdate({ listId: id }, { isShared: true }).exec();
  }

  async addCollaborativeList(id: string, userId: string): Promise<void> {
    const list = await this.listModel.findOne({ listId: id }).exec();
    this.mailService.sendMailAddCollaborativeList(list.owner, list.title);
    this.listModel
      .findOneAndUpdate(
        { listId: id },
        {
          $set: { isCollaborative: true },
          $push: { usersAllowed: userId },
        },
        { new: true }
      )
      .exec();
  }

  async addItem(id: string, item: ListItem): Promise<void> {
    this.listModel
      .findOneAndUpdate(
        { listId: id },
        { $push: { items: item } },
        { new: true }
      )
      .exec();
  }

  async deleteItem(id: string, itemId: number): Promise<void> {
    this.listModel
      .findOneAndUpdate(
        { listId: id },
        { $pull: { items: itemId } },
        { new: true }
      )
      .exec();
  }
}
