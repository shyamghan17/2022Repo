const express = require('express')

const router = express.Router()
router.post('/signup', (req, res) =>{
    console.log(req.body);
    res.send('you made a post requrst')
})

module.exports = router