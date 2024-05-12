import { Schema } from 'mongoose';

export const RateSchema = new Schema({
  userId: String,
  rate: Number,
});

export const ListItemSchema = new Schema({
  id: Number,
  type: String,
  rate: [RateSchema],
});

export const ListSchema = new Schema({
  listId: String,
  title: String,
  description: String,
  image: String,
  owner: String,
  usersAllowed: [String],
  items: [ListItemSchema],
  isCollaborative: Boolean,
  isShared: Boolean,
});
