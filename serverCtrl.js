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
        });
    },
    addItem: function (req, res) {
        let id = req.body.itemId;
        let quantity = req.body.quantity;
        console.log('req.body', req.body);
        req.app.get('db').confirmItem(id).then(function (response) {
            console.log('serverCtrl:reached elephantsql', response);
            if (response[0] !== undefined) {
                req.app.get('db').addQuantity([id, quantity]).then(function (response) {
                    console.log('response1');
                    res.status(200).send();
                }).catch(function (err) {
                    console.log('response2');
                    res.status(500).send(err);
                });
            } else {
                req.app.get('db').addItem([id, quantity]).then(function (response) {
                    console.log('response3');
                    res.status(200).send();
                }).catch(function (err) {
                    console.log('response4');
                    res.status(500).send(err);
                });
            }
            res.status(200).send(response);
        }).catch(function (err) {
            res.status(500).send(err);
        });
    },
    getCartItems: function (req, res) {
        console.log('serverCtrl');
        req.app.get('db').getCartItems().then(function (response1) {
            console.log('getCartItems worked', response1);
            req.app.get('db').getSubtotal().then(function (response2) {
                console.log('getSubtotal', response2);
                res.status(200).send({
                    items: response1,
                    subtotal: response2[0].subtotal
                });
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }).catch(function (err) {
            res.status(500).send(err);
        });
    },
    updateSubtotal: function (req, res) {
        console.log('yololo');
        console.log('bananasssss', req.body);
        // req.app.get('db').
    }
};