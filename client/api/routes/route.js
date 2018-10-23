const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({'GET request for /api/': true});
});

router.post('/', (req, res) => {
    res.json({'POST request': true});
});

router.put('/', (req, res) => {
    res.json({'PUT request': true});
});

router.delete('/', (req, res) => {
    res.json({'DELETE request': true});
});

module.exports = router;