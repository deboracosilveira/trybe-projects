var b = db.voos.find({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" }).count();
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: b });
db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
