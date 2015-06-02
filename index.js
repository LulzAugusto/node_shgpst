var express = require('express'),
    app = express(),
    Tago = require('tago');

app.get('/', function (req, res) {
    if (!req.query.lat || !req.query.lon) {
        res.sendStatus(400);
        return;
    }

    var device = new Tago('device', 'ce5868c0-08ed-11e5-937f-d51c9f32e4e9'),
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
