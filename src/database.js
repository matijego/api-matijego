const mongoose = require('mongoose');
//Intercambiar credenciales con datos propios
const urlMongo = 'mongodb+srv://<USUARIO>:<CONTRASEÑA>@cluster0.fwq90.mongodb.net/<NOMBREDELCLUSTER>?retryWrites=true&w=majority';

mongoose.connect(urlMongo)
    .then(db => console.log('La base de datos está conectada'))
    .catch(err => console.error(err));



module.exports = mongoose;
