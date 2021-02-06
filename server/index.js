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


app.listen(PORT, ()=> {
    console.log(`Server listening to http://localhost:${PORT}`);
})