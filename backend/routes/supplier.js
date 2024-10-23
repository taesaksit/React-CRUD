const express = require('express');
const pool = require('../config/db');
const router = express.Router();


router.get('/supplier', async (req, res) => {
    try {
        const [rows] = await pool.query(` SELECT * FROM Suppliers `);
        res.json(rows);

    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send('Server Error');
    }
});

router.post('/supplier', async (req, res) => {
    try {
        let data = req.body;
        const [rows] = await pool.query(`INSERT INTO Suppliers SET ?`, data);
        res.json(rows);

    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send('Server Error');
    }
});

router.put('/supplier/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        const [rows] = await pool.query(`UPDATE  Suppliers SET ? WHERE SupplierID = ?`, [data , id]);
        res.json(rows);

    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send('Server Error');
    }
});

router.delete('/supplier/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const [rows] = await pool.query(`DELETE  FROM Suppliers  WHERE SupplierID = ?`, id);
        res.json(rows);

    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;