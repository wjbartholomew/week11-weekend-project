const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



router.post('/', (req, res) => {
    const newfeedback = req.body;
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) 
        VALUES ($1,$2,$3,$4);`;
    pool.query(queryText, [newfeedback.feeling, newfeedback.understanding, newfeedback.support, newfeedback.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error making query ${queryText}`, err);
            res.sendStatus(500);
        });
});




module.exports = router;