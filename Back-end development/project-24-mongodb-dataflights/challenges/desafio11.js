db.voos.find({ "aeroportoDestino.pais": { $not: /ESTADOS UNIDOS/ } }).count();
