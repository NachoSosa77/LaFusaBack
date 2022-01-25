var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eComerce', {useNewUrlParser: true}, {useUnifiedTopology: true}, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a Mongo Db');
    }
});

module.exports = mongoose;