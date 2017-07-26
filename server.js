const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const app = module.exports = express(),
    port = 3002;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

massive({connectionString: config.elephantsql}).then(function(db) {
    app.set('db', db);
});

const controller = require('./serverCtrl');

app.get('/api/getchocolates', controller.getchocolates);

app.listen(port, function() {
    console.log('Listening on port' + port);
});