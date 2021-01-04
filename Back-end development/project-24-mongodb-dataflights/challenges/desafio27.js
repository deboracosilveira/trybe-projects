var a = db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count();
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: a });
db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
