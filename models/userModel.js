const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // TODO: define schema fields
});
module.exports = mongoose.model('User', userSchema);
