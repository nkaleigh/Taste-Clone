module.exports = {
    getchocolates: function (req, res) {
        req.app.get('db').gettastechocolates().then(function (response) {
            res.status(200).send(response);
        }).catch(function (err) {
            res.status(500).send(err);
        });
    },
    getchocolate: function (req, res) {
        req.app.get('db').getchocolate(req.params.chocoitem).then(function (response) {
            res.status(200).send(response[0]);
        }).catch(function (err) {
            res.status(500).send(err);
        })
    },
    addItem: function(req, res) {
        req.app.get('db').addItem([req.body.id]).then(function(response){
            res.status(200).send(response);
        }.catch(function(err){
            res.status(500).send(err);
        });
    }
};