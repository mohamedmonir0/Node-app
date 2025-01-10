const express = require('express');
const { Pool } = require('pg');
const app = express();

// Database configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT name FROM users LIMIT 1;');
        const name = result.rows[0].name;
        res.send(`Hello World, ${name}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to the database.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
