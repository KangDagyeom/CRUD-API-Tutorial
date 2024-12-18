const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function () {
    console.log("Kết nối thành công");
});
module.exports = mongoose;
