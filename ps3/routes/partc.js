const express = require('express');
const router = express.Router();

router.post('/', (req, res) =>
{
    const str = req.query.string;
    const strLen = str.length;
    res.render("index", {string: str, len: strLen});
});

module.exports = router;