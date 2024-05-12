import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import { List } from '../domain/entities/list';
import { CreateListDto } from '../../dto/createList.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListItem } from '../domain/entities/item.interface';
import { title } from 'process';
import { describe } from 'node:test';

@Injectable()
export class ListService implements ListRepository {
  constructor(@InjectModel(List.name) private listModel: Model<List>) {}

  async getLists(userId: string): Promise<List[]> {
    return this.listModel
      .find({
        $or: [{ owner: userId }, { usersAllowed: userId }],
      })
      .exec();
  }

  async getListById(id: string): Promise<List> {
    return this.listModel.findOne({ listId: id }).exec();
  }

  async createList(list: CreateListDto): Promise<List> {
    const createdList = new this.listModel(list);
    return createdList.save();
  }

  async updateList(id: string, data: CreateListDto): Promise<List> {
    return this.listModel
      .findOneAndUpdate({ listId: id }, data, { new: true })
      .exec();
  }

  async deleteListById(id: string): Promise<void> {
    this.listModel.deleteOne({ listId: id }).exec();
  }

  async makeListCollaborative(id: string): Promise<void> {
    this.listModel.findOneAndUpdate({ listId: id }, { isShared: true }).exec();
  }

  async addCollaborativeList(id: string, userId: string): Promise<void> {
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