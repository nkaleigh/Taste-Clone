module.exports = {
    getchocolates: function(req, res) {
        app.get('db').getchocolates(req.params.chocolate).then(function(chocolate) {
            res.status(200).send(chocolate);
        }).catch(function(err) {
            res.status(500).send(err);
        });
    }
};