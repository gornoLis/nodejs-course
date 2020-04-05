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
    this.columns = [
      {
        id: uuid(),
        title: columns[0].title,
        order: columns[0].order
      }
    ];
  }
}

module.exports = Board;
