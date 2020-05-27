const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');

import { breedsRouter } from "./breeds";

app.use(bodyparser.json());
app.use(cors());
app.options('*');

app.use("/breeds", breedsRouter);

// app.use("*", (req, res, next) => {
//     req.on('end', () => {
//         console.log(`Request: [${req.method}] URL: [${req.originalUrl}] Response: [${res.statusCode}] `);
//     });
//     next();
// });

app.listen(5000, '0.0.0.0', () => {
    console.log(`Server is listening on 0.0.0.0:5000 ...`);
});


