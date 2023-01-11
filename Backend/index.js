const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();

const port = process.env.PORT ;


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(expressValidator())
app.use(cookieParser())
app.use(cors());


const routeuser = require('./routes/user');
const routeformation = require('./routes/formation')
app.use('/api/user', routeuser)
app.use('/api/formation', routeformation)


mongoose.connect(process.env.DB)
    .then(() => console.log("connect to database"))
    .catch(() => console.log("error connecting   to database"))


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});



