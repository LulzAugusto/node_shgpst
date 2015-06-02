var express = require('express'),
    app = express(),
    Tago = require('tago');

app.get('/', function (req, res) {
    if (!req.query.lat || !req.query.lon) {
        res.sendStatus(400);
        return;
    }

    var device = new Tago('device', '1c436d50-08b2-11e5-a3be-7910c7e46f45'),
        data = {
            variable: 'location',
            location: req.query.lat + ',' + req.query.lon,
            time: new Date(),
            value: 0
        };

    device.insert(data);

    console.log('Data inserted:');
    console.log(data);
    res.sendStatus(200);
});

var server = app.listen(2424, function () {
});
