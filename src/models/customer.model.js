let mongoose = require('mongoose');

const server = '';
const database = '';
const user = 'Aminu';
const password = 'AG41';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.faypm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)