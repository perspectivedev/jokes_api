// when using  mongoose it is required to have a require('mongoose') at the top of the file
const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.gx9rwho.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then( () => console.log('Established a connection to the database') )
    .catch( err => console.log('Something went wrong when connectin to the database', err) );