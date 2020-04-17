const mongoose = require('mongoose');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected!");
});

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
