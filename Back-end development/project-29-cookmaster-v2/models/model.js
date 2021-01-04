const { ObjectId } = require('mongodb');
const connection = require('./connection');

const add = async (collection, query) => {
  const result = await connection().then((db) => db.collection(collection).insertOne(query));
  return result.ops[0];
};

const findByName = async (collection, name) => {
  const result = await connection().then((db) => db.collection(collection).findOne({ name }));
  return result;
};

const findByEmail = async (collection, email) => {
  const result = await connection().then((db) => db.collection(collection).findOne({ email }));
  return result;
};

const findById = async (collection, id) => {
  if (!ObjectId.isValid(id)) return null;
  const result = await connection().then((db) => db.collection(collection).findOne(ObjectId(id)));

  return result;
};

const findAll = async (collection) => {
  const result = await connection().then((db) => db.collection(collection).find().toArray());
  return result;
};

const update = async (collection, id, query) => {
  const result = await connection().then((db) =>
    db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: query }),
  );
  return result;
};

const deleteItem = async (collection, id) => {
  const result = await connection().then((db) =>
    db.collection(collection).deleteOne({ _id: ObjectId(id) }),
  );
  return result;
};

const addImage = async (collection, id, imagePath) =>
  connection().then((db) =>
    db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: { image: imagePath } }),
  );

module.exports = {
  add,
  findByName,
  findByEmail,
  findById,
  findAll,
  update,
  deleteItem,
  addImage,
};
