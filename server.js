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

app.post('/api/test/', function(req, res) {
    console.log('reached node server');
    let name = req.body.name;
    console.log('name', name);
    console.log('e', req.app.get('db'))
    req.app.get('db').getchocolates(name).then(function(response) {
        res.status(200).send(response);
    }).catch(function(err) {
        res.status(500).send(err);
    });
});
app.get('/api/chocolate/', function(req, res) {
    console.log('appliepie');
    req.app.get('db').getchocolates().then(function(response) {
        console.log('response', response);
        res.status(200).send('bite')
    }).catch(function(err) {
        res.status(500).send(err);
    });
});
app.get('/api/tastechocolates/', function(req, res) {
    console.log('tehehe');
    req.app.get('db').gettastechocolates().then(function(response) {
        res.status(200).send(response);
    }).catch(function(err) {
        res.status(500).send(err);
    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});