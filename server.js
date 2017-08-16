const express = require('express'), 
    bodyParser = require('body-parser'), 
    massive = require('massive');
const cors = require('cors');
const config = require('./config');

const app = module.exports = express(), 
    port = 3003;

app.use(bodyParser.json());
app.use(cors());


app.use(express.static('public'));


massive({connectionString: config.elephantsql}).then(function(db) {
    app.set('db', db);
});

const controller = require('./serverCtrl');

app.get('/api/tastechocolates/', controller.getchocolates);
app.get('/api/getchocolate/:chocoitem', controller.getchocolate);
app.post('/api/addItem/', controller.addItem);

app.listen(port, function() {
    console.log('Listening on port ' + port);
});