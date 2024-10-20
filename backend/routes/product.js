const express = require('express');
const pool = require('../config/db');
const router = express.Router();


router.get('/products', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM products ORDER BY ProductID DESC');
        res.json(rows);

    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send('Server Error');
    }
});

router.post('/products', async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        let result = await pool.query("INSERT INTO products SET ?", data);
        res.status(200).json(result)

    } catch (err) {
        console.log("Error from product insert", err)
        res.status(500).send('Database error')
    }
})

router.delete('/products/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let result = await pool.query("DELETE FROM products WHERE productId = ?", id);
        res.status(200).json(result)

    } catch (err) {
        console.log("Error from product insert", err)
        res.status(500).send('Database error')
    }
})

router.put('/products/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let result = await pool.query("UPDATE products SET ?  WHERE productId = ?", [data, id]);
        res.status(200).json(result)

    } catch (err) {
        console.log("Error from product insert", err)
        res.status(500).send('Database error')
    }
})


module.exports = router;