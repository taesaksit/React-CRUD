const express = require('express');
const pool = require('../config/db');
const router = express.Router();

router.get('/categories', async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM Categories');
        res.json(rows);
    } catch (err) {
        // console.log('Error' , err);
        res.status(500).send('Server Error');
    }

});




module.exports = router;