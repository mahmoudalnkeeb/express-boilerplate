const express = require('express');
const errHandler = require('./middlewares/errHandler');
const cors = require('cors');
const router = require('./routes');
const env = require('./configs/env');
const app = express();
const port = env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

app.use(router)
app.use(errHandler)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
