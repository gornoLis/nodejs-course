const mongoose = require('mongoose');
const uuid = require('uuid');

const boardSchema = new mongoose.Schema({
  title: String,
  columns: [
    {
      title: String,
      order: {
        type: Number,
        default: 0
      },
      _id: {
        type: String,
        default: uuid
      }
    }
  ],
  _id: {
    type: String,
    default: uuid
  }
});

boardSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
