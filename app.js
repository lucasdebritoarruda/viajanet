const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoute = require('./app_api/routes/index');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api', apiRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {});

app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});
