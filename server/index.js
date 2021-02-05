// const express = require('express');
// const parser = require('body-parser');
// const path = require('path');
// const db = require('./database');
// const cors = require('cors');
// const compression = require('compression');

// const PORT= 8003;
// const app = express();

// app.use(cors({
//     origin: 'http://localhost:8000'
// }));
// app.use(compression());
// app.use(parser.json());
// app.use('/', express.static(path.join(__dirname, '..', 'public')));
// app.use('/bundle', express.static('public/bundle.js'))

// app.get('/api/products/:id', (req, res) => {
//     let _id = req.params.id;
//     db.getProduct(_id, (err, result) => {
//         if(err){
//             console.log(`Error happened when retrieving from database: ${err}`);
//             res.sendStatus(404);
//         } else if(result) {
//             res.status(200).json(result);
//         } else {
//             console.log(`Something went wrong when retrieving from database`);
//             res.sendStatus(500);
//         }
//     });
// });

// app.get('/api/products/:id/:color', (req, res) => {
//     let _id = req.params.id, _color = req.params.color;
//     db.getProductColor(_id, _color, (err, result) => {
//         if(err){
//             console.log(`Error happened when retrieving from database: ${err}`);
//             res.status(404).send(err);
//         } else if(result) {
//             res.status(200).json(result);
//         } else {
//             let newErr = new Error('Something went wrong when retrieving from datase. Something and nothing was both found and not found. What a weird schrodinger experience.')
//             console.log(newErr);
//             res.status(404).send(err);
//         }
//     })
// })
// app.listen(PORT, ()=> {
//     console.log(`Server listening to http://localhost:${PORT}`);
// })