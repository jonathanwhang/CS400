const express = require('express');
const router = express.Router();

router.get('/partb', (req,res) =>
{
    res.render("index", {fixedString: "salty mangoes"});
});

module.exports = router;