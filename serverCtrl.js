module.exports = {
    getchocolates: function (req, res) {
        req.app.get('db').gettastechocolates().then(function (response) {
            res.status(200).send(response);
        }).catch(function (err) {
            res.status(500).send(err);
        });
    },
    getchocolate: function(req, res) {
        console.log('reached serverCtrl.getchocolate');
        req.app.get('db').getchocolate(req.params.chocoitem).then(function(response) {
            console.log('db reponse', reponse);
            res.status(200).send(response);
        }).catch(function(err) {
            res.status(500).send(err);
        });
    }
};