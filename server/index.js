const newrelic = require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./database/connection.js');
const cors = require('cors');
const compression = require('compression');

const PORT= 3000;
const app = express();

app.use(cors({
    origin: 'http://localhost:8000'
}));
app.use(compression());
app.use(parser.json());
app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use('/bundle', express.static('public/bundle.js'))


app.get('/api/clothing/:clothingId', (req, res) => {
    let item = req.params.clothingId;
    db.getItemData(item, (err, data) => {
        if (err) {
            console.log('GET ERROR', err);
            res.status(400).send(err).end();
        } else {
            console.log('GET success', data);
            res.status(200).send(data).end();
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT}`);
})