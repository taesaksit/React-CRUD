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

router.post('/categories', async (req, res) => {

    try {
        let data = req.body;
        const result = await pool.query('INSERT INTO Categories SET ?', data);
        res.status(200).json(result);

    } catch (err) {

        res.status(500).json({ message: 'Server Error', error: err });

    }

});

router.delete('/categories/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const result = await pool.query('DELETE FROM Categories WHERE CategoryID = ?', id);
        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
    }

});

router.put('/categories/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let data = req.body;
        let result = await pool.query("UPDATE Categories SET ?  WHERE CategoryID = ?", [data, id]);
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
    }

});



module.exports = router;