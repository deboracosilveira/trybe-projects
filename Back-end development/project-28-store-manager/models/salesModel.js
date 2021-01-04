const { ObjectId } = require('mongodb');
const connection = require('./connection');

const addSale = async (itensSold) => {
  const sales = await connection().then((db) => db.collection('sales').insertOne({ itensSold }));
  const { insertedId: _id } = sales;

  const result = { _id, itensSold };
  return result;
};

const findAll = async () => {
  const result = await connection().then((db) => db.collection('sales').find().toArray());
  return result;
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const result = await connection().then((db) => db.collection('sales').findOne(ObjectId(id)));
  return result;
};

const updateSale = async (id, itensSold) => {
  const result = await connection().then((db) =>
    db
      .collection('sales')
      .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { itensSold } }, { returnOriginal: false }),
  );
  return result.value;
};

const deleteSale = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const result = await connection().then((db) =>
    db.collection('sales').deleteOne({ _id: ObjectId(id) }),
  );
  return result;
};

module.exports = {
  addSale,
  findAll,
  findById,
  updateSale,
  deleteSale,
};
