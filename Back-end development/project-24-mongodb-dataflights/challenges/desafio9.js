db.voos.find({ $or: [{ ano: 2017 }, { ano: 2018 }] }).count();
