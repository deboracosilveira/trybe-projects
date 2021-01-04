const connection = require('./connection');

const getMessages = async () => {
  const messages = await connection().then((db) => db.collection('messages').find({}).toArray());
  return messages;
};

const writeNewMessage = async (chatMessage, nickname, timestamp) => {
  const message = await connection().then((db) =>
    db.collection('messages').insertOne({ chatMessage, nickname, created_on: timestamp }));
  return message.ops[0];
};

module.exports = {
  getMessages,
  writeNewMessage,
};
