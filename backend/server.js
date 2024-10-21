require('dotenv').config();
const express = require("express");
const pool = require('./config/db')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', require('./routes/product'));
app.use('/api', require('./routes/category'));


app.listen(process.env.PORT, () => {

    // Check connection db;
    pool.getConnection().catch(err => {
        console.error('Database connection error: ', err);
    });
    
    console.log('SERVER IS RUNNING ON PORT' + process.env.PORT);
});