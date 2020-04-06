const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'board',
    columns = [
      {
        id: uuid(),
        title: 'column',
        order: 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = Board.addColumns(columns);
  }
  static addColumns(columns) {
    const arr = [];
    const id = uuid();
    for (let i = 0; i < columns.length; i++) {
      const { title, order } = columns[i];
      arr.push({
        id,
        title,
        order
      });
    }
    return arr;
  }
}

module.exports = Board;
